import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersService = {
    findOne: jest.fn(async (username) => {
      if (username === 'testUser1') {
        return null;
      } else {
        return {
          id: 1,
          username: username,
          password: await bcrypt.hash('123', 10),
        };
      }
    }),
  };

  const mockJwtService = {
    sign: jest.fn(() => {
      return 'accesstoken';
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: mockJwtService },
        { provide: UsersService, useValue: mockUsersService },
      ],
      controllers: [AuthController],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return username and id for a valid user.', async () => {
      expect(await service.validateUser('testUser', '123')).toStrictEqual({
        id: 1,
        username: 'testUser',
      });
    });

    it('should throw an error if a user does not exist in the data store.', async () => {
      await expect(service.validateUser('testUser1', '123')).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw an error if the passwords do not match.', async () => {
      await expect(service.validateUser('testUser', '456')).rejects.toThrow(
        UnauthorizedException,
      );
    });
  });

  describe('login', () => {
    it('should return an access token from the login method.', async () => {
      expect(
        await service.login({ username: 'testUser', id: 1 }),
      ).toStrictEqual({
        access_token: expect.any(String),
      });
    });
  });
});
