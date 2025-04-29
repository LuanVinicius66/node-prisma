import { Router } from "express";
import { prisma } from "../libs/prisma";
import {
  createUser,
  createUsers,
  getAllUsers,
  getUserByEmail,
  updateUser,
} from "../services/user";
import { count } from "console";

export const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});

mainRouter.post("/user", async (req, res) => {
  // Validar dados recebidos

  const user = await createUser({
    name: "George",
    email: "george@hotmail.com",
    Posts: {
      create: {
        title: "Baton Rouge",
        subtitle: "Baton Rouge",
        body: "Baton Rouge",
      },
    },
  });
  if (user) {
    res.status(201).json({ user });
  } else {
    res.status(500).json({ error: "Algo de errado não está certo!" });
  }
});

mainRouter.post("/users", async (req, res) => {
  const result = await createUsers([
    { name: "Pascoal", email: "pascoal@gmail.com" },
    { name: "Levi", email: "levi@gmail.com" },
    { name: "Fred", email: "fred@gmail.com" },
    { name: "Joe", email: "joe@gmail.com" },
  ]);
  res.json({ result });
});

mainRouter.get("/users", async (req, res) => {
  const result = await getAllUsers();
  res.json({ result });
});

mainRouter.get("/user", async (req, res) => {
  const result = await getUserByEmail(29);
  res.json({ result });
});

mainRouter.put("/user", async (req, res) => {
  const result = await updateUser();
  res.json({ result });
});
