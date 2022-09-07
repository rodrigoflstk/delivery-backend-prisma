import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { client_id, item_name } = request.body;
    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      client_id,
      item_name,
    });

    return response.json(delivery);
  }
}

export { CreateDeliveryController };
