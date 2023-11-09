import { Bcrypt } from "../utils/bcrypt/index.js";

export class CreateUserUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(user) {
    const emailVerification = await this.repository.email(user.email);
    if (emailVerification) {
      throw new Error("Email já existe");
    }

    user.password = Bcrypt.generate(user.password);
    const userCreated = await this.repository.create(user);
    if (!userCreated) {
      throw new Error("Erro ao criar o usuário");
    }

    return userCreated;
  }
}
