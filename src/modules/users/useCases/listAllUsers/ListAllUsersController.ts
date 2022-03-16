import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers.user_id as string;
      return response.status(200).json(
        this.listAllUsersUseCase.execute({
          user_id,
        })
      );
    } catch (erro) {
      return response.status(400).json({
        error: true,
      });
    }
    // Complete aqui
  }
}

export { ListAllUsersController };
