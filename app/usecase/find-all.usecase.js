export class FindAllUserUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.findAll();
  }
}
