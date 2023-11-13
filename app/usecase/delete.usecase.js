export class DeleteUserUsecase {
  constructor(repository, FindByIdUserUsecase) {
    this.repository = repository;
    this.findByIdUserUsecase = FindByIdUserUsecase;
  }

  async execute(id) {
    await this.findByIdUserUsecase.execute(id);
    const user = await this.repository.delete(id);
    if (!user) {
      throw new Error("Usuário não foi deletado");
    }

    return {
      message: "Usuário deletado",
    };
  }
}
