import * as bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/PrismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
}

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.client.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Invalid credentials!!");
    }

    const passwordVerification = await bcrypt.compare(
      password,
      client.password
    );

    if (!passwordVerification) {
      throw new Error("Invalid credentials!!");
    }

    const token = sign({ username }, "c4e70ca5e4aef7ce6dcb11e2dab50966", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateClientUseCase };
