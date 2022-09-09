import { Request, Response } from "express";
import { prisma } from "../../../../database/PrismaClient";
import { AddDeliverymanUseCase } from "./AddDeliverymanUseCase";

class AddDeliverymanController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;
    const { id: delivery_id } = request.params;

    const addDeliverymanUseCase = new AddDeliverymanUseCase();

    const delivery = addDeliverymanUseCase.execute({
      deliveryman_id,
      delivery_id,
    });

    return response.json(delivery);
  }
}

export { AddDeliverymanController };
