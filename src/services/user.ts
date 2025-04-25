import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    const user = await prisma.user.create({ data });
    return user;
  } catch (error) {
    return false;
  }
};

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
  try {
    return await prisma.user.createMany({
      data: users,
      skipDuplicates: true,
    });
  } catch (error) {
    return false;
  }
};
