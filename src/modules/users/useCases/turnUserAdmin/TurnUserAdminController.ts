import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id = request.params.user_id as string;

    try {
      return response
        .status(200)
        .json(this.turnUserAdminUseCase.execute({ user_id }));
    } catch (error) {
      return response.status(404).json({
        error: true,
      });
    }
  }
}

export { TurnUserAdminController };
