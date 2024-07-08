import { UpsertUserInput, UserCreated } from '../domain/entities/user';
import { UserPrismaRepository } from '../infrastructure/repositories/user-prisma-repository';

export class CreateUserService {
  constructor(private readonly userRepository: UserPrismaRepository) {}

  async run(userData: UpsertUserInput): Promise<UserCreated> {
    const userCreated = await this.userRepository.create(userData);

    return userCreated;
  }
}
