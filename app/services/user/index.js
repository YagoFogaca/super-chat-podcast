export class UserService {
  constructor(
    createUserUseCase,
    findAllUsersUseCase,
    FindByIdUserUsecase,
    updateUserUsecase,
    deleteUserUsecase
  ) {
    this.createUserUseCase = createUserUseCase;
    this.findAllUsersUseCase = findAllUsersUseCase;
    this.findByIdUserUsecase = FindByIdUserUsecase;
    this.updateUserUsecase = updateUserUsecase;
    this.deleteUserUsecase = deleteUserUsecase;
  }

  async create(user) {
    return await this.createUserUseCase.execute(user);
  }

  async findAll() {
    return await this.findAllUsersUseCase.execute();
  }

  async findById(id) {
    return await this.findByIdUserUsecase.execute(id);
  }

  async update(id, user) {
    return await this.updateUserUsecase.execute(id, user);
  }

  async delete(id) {
    return await this.deleteUserUsecase.execute(id);
  }
}
