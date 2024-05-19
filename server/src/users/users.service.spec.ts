import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ConflictException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;

  const mockUserRepository = {
    save: jest.fn((dto) => {
      return {
        id: 1,
        balance: 1000.0,
        username: dto.username,
        password: dto.password,
      };
    }),
    findOne: jest.fn((query) => {
      if (query.where.username === 'testUser1' || query.where.id === 1) {
        return {
          id: 1,
          username: 'testUser1',
          password: 'password',
          balance: 1000.0,
        };
      }

      return null;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user.', async () => {
    const user = {
      username: 'testUser',
      password: 'password',
      confirmPassword: 'password',
    };

    expect(await service.create(user)).toStrictEqual({
      id: expect.any(Number),
    });
  });

  it('should not create a user if a user already exists.', async () => {
    const user = {
      username: 'testUser1',
      password: 'password',
      confirmPassword: 'password',
    };

    await expect(service.create(user)).rejects.toThrow(ConflictException);
  });

  it('should find a single user.', async () => {
    expect(await service.findOne(1)).toStrictEqual({
      id: 1,
      username: 'testUser1',
      password: 'password',
      balance: 1000.0,
    });
  });
});
