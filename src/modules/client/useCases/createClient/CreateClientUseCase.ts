import { hash } from "bcrypt";
import { prisma } from "../../../../database/PrismaClient";

prisma;

interface ICreateClient {
  username: string;
  password: string;
}

class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    const clientExists = await prisma.client.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (clientExists) {
      throw new Error("Client already exists");
    }

    const hashedPassword = await hash(password, 10);

    const client = await prisma.client.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
