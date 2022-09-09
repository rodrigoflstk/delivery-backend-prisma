import { prisma } from "../../../../database/PrismaClient";

interface IUpdateEndDate {
  deliveryman_id: string;
  delivery_id: string;
}

class UpdateEndDateUseCase {
  async execute({ deliveryman_id, delivery_id }: IUpdateEndDate) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: delivery_id,
        deliveryman_id,
      },
      data: {
        end_at: new Date(),
      },
    });

    return result;
  }
}

export { UpdateEndDateUseCase };
