import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../repository/user/index.js";
import { UserService } from "../services/user/index.js";
import { UserController } from "../controllers/user/index.js";
import { UserRoutes } from "../routes/user.routes.js";
import { CreateUserUseCase } from "../usecase/create.usecase.js";

export function userProvider(router) {
  const prisma = new PrismaClient();
  const repository = new UserRepository(prisma);
  const createUserUseCase = new CreateUserUseCase(repository);
  const service = new UserService(createUserUseCase, repository);
  const controller = new UserController(service);
  const routes = new UserRoutes(router, controller);

  return routes;
}
