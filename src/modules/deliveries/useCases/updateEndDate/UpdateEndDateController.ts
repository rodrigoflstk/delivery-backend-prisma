import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id: delivery_id } = request.params;
    const { deliveryman_id } = request;

    const updateEndDateUseCase = new UpdateEndDateUseCase();
    const updatedDelivery = updateEndDateUseCase.execute({
      deliveryman_id,
      delivery_id,
    });

    return response.json(updatedDelivery);
  }
}

export { UpdateEndDateController };
