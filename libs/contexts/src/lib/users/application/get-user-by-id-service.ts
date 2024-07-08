import { ErrorCodes, codifyError } from '@nx-nest-api-integrated/shared';
import type { User } from '../domain/entities/user';
import { UserPrismaRepository } from '../infrastructure/repositories/user-prisma-repository';

export class GetUserByIdService {
  constructor(private readonly userRepository: UserPrismaRepository) {}

  async run(id: number): Promise<User> {
    const user = await this.userRepository.getById(id);

    if (!user) {
      throw codifyError(
        new Error('User not found'),
        ErrorCodes.USER_ID_NOT_FOUND
      );
    }

    return user;
  }
}
