import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    create: jest.fn(() => {
      return { id: 1 };
    }),
    findOne: jest.fn((id) => {
      return {
        id,
        username: 'testUser',
        password: 'password',
        balance: 1000.0,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a new user.', () => {
    const user = {
      username: 'testUser',
      password: 'password',
      confirmPassword: 'password',
    };

    expect(controller.create(user)).toStrictEqual({ id: expect.any(Number) });
  });
});
