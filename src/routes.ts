import { request, response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingController } from "./controllers/SettingsController";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

const settingsController = new SettingController();

routes.post("/settings", settingsController.create)

export { routes }