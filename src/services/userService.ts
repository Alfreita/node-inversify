import "reflect-metadata";
import { injectable } from "inversify";
import { UserServiceInterface } from "./interfaces/userServiceInterface";

@injectable()
export class UserService implements UserServiceInterface {
  constructor() {}
  indexText(): string {
    return "OK";
  }
}
