import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password, phone, email } = request.body;

    const createClientUseCase = new CreateClientUseCase();

    const result = await createClientUseCase.execute({
      username,
      email,
      password,
      phone,
    });

    return response.json(result);
  }
}

export { CreateClientController };
