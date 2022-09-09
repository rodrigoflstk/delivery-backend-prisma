import { prisma } from "../../../../database/PrismaClient";

class FindAllDeliverymanDeliveriesUseCase {
  async execute(deliveryman_id: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: deliveryman_id,
      },
      select: {
        id: true,
        username: true,
        Deliveries: true,
      },
    });

    return deliveries;
  }
}

export { FindAllDeliverymanDeliveriesUseCase };
