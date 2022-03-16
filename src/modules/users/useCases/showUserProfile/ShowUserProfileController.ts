import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const user_id = request.params.user_id as string;

      return response.status(200).json(
        this.showUserProfileUseCase.execute({
          user_id,
        })
      );
    } catch (error) {
      return response.status(404).json({ error: true });
    }
  }
}

export { ShowUserProfileController };
