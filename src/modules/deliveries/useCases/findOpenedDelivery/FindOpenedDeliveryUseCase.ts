import { prisma } from "../../../../database/PrismaClient";

class FindOpenedDeliveryUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: { deliveryman_id: null },
    });

    return deliveries;
  }
}

export { FindOpenedDeliveryUseCase };
