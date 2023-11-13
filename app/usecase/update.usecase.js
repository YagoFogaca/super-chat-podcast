export class UpdateUserUsecase {
  constructor(repository, FindByIdUserUsecase) {
    this.repository = repository;
    this.findByIdUserUsecase = FindByIdUserUsecase;
  }

  async execute(id, user) {
    await this.findByIdUserUsecase.execute(+id);
    const userUpdated = await this.repository.update(+id, user);
    if (!userUpdated) {
      throw new Error("Usuário não atualizado");
    }

    return {
      message: "Usuário atualizado",
      data: userUpdated,
    };
  }
}
