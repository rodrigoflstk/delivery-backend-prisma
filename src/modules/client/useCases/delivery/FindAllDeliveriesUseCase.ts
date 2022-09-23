import { prisma } from "../../../../database/PrismaClient";

class FindAllDeliveriesUseCase {
  async execute(client_id: string) {
    const findDeliveries = await prisma.client.findMany({
      where: {
        id: client_id,
      },
      select: {
        id: true,
        username: true,
        email: true,
        phone: true,
        Deliveries: true,
      },
    });

    return findDeliveries;
  }
}

export { FindAllDeliveriesUseCase };
