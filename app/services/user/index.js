export class UserService {
  constructor(createUserUseCase, repository) {
    this.repository = repository;
    this.createUserUseCase = createUserUseCase;
  }

  async create(user) {
    return await this.createUserUseCase.execute(user);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id) {
    return await this.repository.findById(id);
  }

  async update(id, user) {
    return await this.repository.update(id, user);
  }

  async delete(id) {
    return await this.repository.delete(id);
  }
}
