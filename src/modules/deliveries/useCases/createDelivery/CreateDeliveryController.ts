import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name, description, pickup_address, delivery_address } =
      request.body;
    const { client_id } = request;
    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      client_id,
      item_name,
      description,
      pickup_address,
      delivery_address,
    });

    return response.json(delivery);
  }
}

export { CreateDeliveryController };
