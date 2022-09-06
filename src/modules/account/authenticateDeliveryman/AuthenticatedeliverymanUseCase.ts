import * as bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/PrismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Invalid credentials!!");
    }

    const passwordVerification = await bcrypt.compare(
      password,
      deliveryman.password
    );

    if (!passwordVerification) {
      throw new Error("Invalid credentials!!");
    }

    const token = sign({ username }, "c4e70ca5e4aef7ce6dcb22e2dab50966", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateDeliverymanUseCase };
