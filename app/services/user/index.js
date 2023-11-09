export class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(user) {
    return await this.repository.create(user);
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
