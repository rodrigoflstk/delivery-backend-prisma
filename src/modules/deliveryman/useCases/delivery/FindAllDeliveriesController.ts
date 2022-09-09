import { Request, Response } from "express";
import { FindAllDeliverymanDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

class FindAllDeliverymanDeliveriesController {
  async handle(request: Request, response: Response) {
    const { deliveryman_id } = request;

    const findAllDeliverymanDeliveriesUseCase =
      new FindAllDeliverymanDeliveriesUseCase();
    const deliveries = await findAllDeliverymanDeliveriesUseCase.execute(
      deliveryman_id
    );

    return response.json(deliveries);
  }
}

export { FindAllDeliverymanDeliveriesController };
