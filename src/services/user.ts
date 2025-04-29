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

export const getAllUsers = async () => {
  let page = 7;

  let skip = (page - 1) * 2;

  const users = await prisma.user.findMany({
    skip: skip,
    take: 2,
  });
  return users;
};

export const getUserByEmail = async (id: number) => {
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      email: true,
      status: true,
    },
    where: { id },
  });
  return user;
};

export const updateUser = async () => {
  const updatedUser = await prisma.user.updateMany({
    where: {
      name: {
        startsWith: "L",
      },
    },
    data: {
      status: true,
    },
  });

  return updatedUser;
};
