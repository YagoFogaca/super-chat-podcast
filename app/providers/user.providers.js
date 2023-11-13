import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../repository/user/index.js";
import { UserService } from "../services/user/index.js";
import { UserController } from "../controllers/user/index.js";
import { UserRoutes } from "../routes/user.routes.js";
import { CreateUserUseCase } from "../usecase/create.usecase.js";
import { FindAllUserUsecase } from "../usecase/find-all.usecase.js";
import { FindByIdUserUsecase } from "../usecase/find-by-id.usecase.js";
import { UpdateUserUsecase } from "../usecase/update.usecase.js";
import { DeleteUserUsecase } from "../usecase/delete.usecase.js";

export function userProvider(router) {
  const prisma = new PrismaClient();
  const repository = new UserRepository(prisma);
  const createUserUseCase = new CreateUserUseCase(repository);
  const findAllUserUsecase = new FindAllUserUsecase(repository);
  const findByIdUserUsecase = new FindByIdUserUsecase(repository);
  const updateUserUsecase = new UpdateUserUsecase(
    repository,
    findByIdUserUsecase
  );
  const deleteUserUsecase = new DeleteUserUsecase(
    repository,
    findByIdUserUsecase
  );
  const service = new UserService(
    createUserUseCase,
    findAllUserUsecase,
    findByIdUserUsecase,
    updateUserUsecase,
    deleteUserUsecase
  );
  const controller = new UserController(service);
  const routes = new UserRoutes(router, controller);

  return routes;
}
