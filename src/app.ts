import "reflect-metadata";
import * as bodyParser from "body-parser";

import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

import TYPES from "./types";

import "./controllers/userControllers";
