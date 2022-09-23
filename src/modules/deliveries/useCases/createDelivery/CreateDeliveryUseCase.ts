import { prisma } from "../../../../database/PrismaClient";

interface ICreateDelivery {
  item_name: string;
  client_id: string;
  pickup_address: string;
  delivery_address: string;
  description: string;
}

class CreateDeliveryUseCase {
  async execute({
    item_name,
    client_id,
    delivery_address,
    pickup_address,
    description,
  }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        client_id,
        pickup_address,
        delivery_address,
        description,
      },
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
