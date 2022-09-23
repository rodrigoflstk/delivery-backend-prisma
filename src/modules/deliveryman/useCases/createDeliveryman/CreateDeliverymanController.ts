import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password, phone, email } = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();

    const result = await createDeliverymanUseCase.execute({
      username,
      email,
      password,
      phone,
    });

    return response.json(result);
  }
}

export { CreateDeliverymanController };
