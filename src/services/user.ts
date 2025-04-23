import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

type CreateUserProps = {
  name: string;
  email: string;
};

export const createUser = async ({ name, email }: CreateUserProps) => {
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    return user;
  } catch (error) {
    return false;
  }
};
