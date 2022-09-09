import { prisma } from "../../../../database/PrismaClient";

interface IAddDeliveryman {
  deliveryman_id: string;
  delivery_id: string;
}

class AddDeliverymanUseCase {
  async execute({ deliveryman_id, delivery_id }: IAddDeliveryman) {
    const result = await prisma.deliveries.update({
      where: {
        id: delivery_id,
      },
      data: {
        deliveryman_id,
      },
    });

    return result;
  }
}

export { AddDeliverymanUseCase };
