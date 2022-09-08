import { Request, Response } from "express";
import { FindOpenedDeliveryUseCase } from "./FindOpenedDeliveryUseCase";

class FindOpenedDeliveryController {
  async handle(request: Request, response: Response) {
    const findOpenedDeliveryUseCase = new FindOpenedDeliveryUseCase();

    const result = await findOpenedDeliveryUseCase.execute();

    return response.json(result);
  }
}

export { FindOpenedDeliveryController };
