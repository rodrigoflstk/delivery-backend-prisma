import * as bcrypt from "bcrypt";
import { prisma } from "../../../../database/PrismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
  email: string;
  phone: string;
}

class CreateDeliverymanUseCase {
  async execute({ password, username, email, phone }: ICreateDeliveryman) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
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
        email,
        password: hashedPassword,
        phone,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
