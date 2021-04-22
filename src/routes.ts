import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesController } from "./controllers/MessagesController";
import { SettingController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

const settingsController = new SettingController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create)

routes.post("/users", usersController.create)

routes.post("/messages", messagesController.create)
routes.post("/messages/:id", messagesController.showByUser)

export { routes }