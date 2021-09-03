"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("reflect-metadata");
const body_parser_1 = require("body-parser");
const inversify_1 = require("inversify");
const inversify_express_utils_1 = require("inversify-express-utils");
const types_1 = __importDefault(require("./types"));
require("./controllers/userControllers");
const userService_1 = require("./services/userService");
const container = new inversify_1.Container();
class App {
    constructor() {
        this.configDependencies();
        this.createServer();
    }
    configDependencies() {
        container
            .bind(types_1.default.UserServiceInterface)
            .to(userService_1.UserService);
    }
    createServer() {
        const server = new inversify_express_utils_1.InversifyExpressServer(container);
        server.setConfig((app) => {
            app.use((0, body_parser_1.urlencoded)({ extended: true }));
            app.use((0, body_parser_1.json)());
        });
        const app = server.build();
        app.listen(3000);
        console.log("Servidor iniciado na porta 3000");
    }
}
exports.App = App;
exports.default = new App();
