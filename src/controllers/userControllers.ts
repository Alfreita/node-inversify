import * as express from "express";
import { inject } from "inversify";
import {
  httpGet,
  BaseHttpController,
  interfaces,
  controller,
} from "inversify-express-utils";

import TYPES from "../types";

import { UserServiceInterface } from "../services/interfaces/userServiceInterface";

@controller("/user")
export class UserController
  extends BaseHttpController
  implements interfaces.Controller
{
  private _userService: UserServiceInterface;

  constructor(
    @inject(TYPES.UserServiceInterface) userService: UserServiceInterface
  ) {
    super();
    this._userService = userService;
  }
  @httpGet("/")
  public index(): interfaces.IHttpActionResult {
    const result: string = this._userService.indexText();
    return this.ok(result);
  }
}
