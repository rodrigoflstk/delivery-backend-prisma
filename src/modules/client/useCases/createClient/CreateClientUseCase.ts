import * as bcrypt from "bcrypt";
import { prisma } from "../../../../database/PrismaClient";

interface ICreateClient {
  username: string;
  password: string;
  phone: string;
  email: string;
}

class CreateClientUseCase {
  async execute({ password, username, phone, email }: ICreateClient) {
    const clientExists = await prisma.client.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const client = await prisma.client.create({
      data: {
        username,
        email,
        password: hashedPassword,
        phone,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
