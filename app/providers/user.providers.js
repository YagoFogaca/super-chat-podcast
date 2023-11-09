import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../repository/user/index.js";
import { UserService } from "../services/user/index.js";
import { UserController } from "../controllers/user/index.js";
import { UserRoutes } from "../routes/user.routes.js";

export function userProvider(router) {
  const prisma = new PrismaClient();
  const repository = new UserRepository(prisma);
  const service = new UserService(repository);
  const controller = new UserController(service);
  const routes = new UserRoutes(router, controller);

  return routes;
}
