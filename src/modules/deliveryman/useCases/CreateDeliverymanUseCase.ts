import { prisma } from "../../../database/PrismaClient";
import * as bcrypt from "bcrypt";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliveryman) {
    const deliverymanExists = await prisma.deliveryman.findUnique({
      where: {
        username: username,
      },
    });

    if (deliverymanExists) {
      throw new Error("Deliveryman Already Exists");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
