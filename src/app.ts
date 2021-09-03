import "reflect-metadata";
import { json, urlencoded } from "body-parser";

import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import TYPES from "./types";

import "./controllers/userControllers";

import { UserService } from "./services/userService";
import { UserServiceInterface } from "./services/interfaces/userServiceInterface";

const container = new Container();

export class App {
  constructor() {
    this.configDependencies();
    this.createServer();
  }
  configDependencies() {
    container
      .bind<UserServiceInterface>(TYPES.UserServiceInterface)
      .to(UserService);
  }
  createServer(): void {
    const server: InversifyExpressServer = new InversifyExpressServer(
      container
    );
    server.setConfig((app) => {
      app.use(urlencoded({ extended: true }));
      app.use(json());
    });
    const app = server.build();
    app.listen(3000);
    console.log("Servidor iniciado na porta 3000");
  }
}

export default new App();
