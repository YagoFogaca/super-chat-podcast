export class FindByIdUserUsecase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    const user = await this.repository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  }
}
