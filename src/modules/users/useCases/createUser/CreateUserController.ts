import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

interface IUser {
  name: string;
  email: string;
}

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request<any, any, IUser>, response: Response): Response {
    try {
      return response
        .status(201)
        .json(this.createUserUseCase.execute(request.body));
    } catch (error) {
      return response.status(400).json({
        error: true,
      });
    }
    // Complete aqui
  }
}

export { CreateUserController };
