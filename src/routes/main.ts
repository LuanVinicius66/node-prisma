import { Router } from "express";
import { prisma } from "../libs/prisma";
import {
  createUser,
  createUsers,
  getAllUsers,
  getUserByEmail,
} from "../services/user";
import { count } from "console";

export const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});

mainRouter.post("/user", async (req, res) => {
  // Validar dados recebidos

  const user = await createUser({
    name: "Vladimir",
    email: "vladimir@hotmail.com",
    Posts: {
      create: {
        title: "Titulo de teste - Vladimir",
        subtitle: "Subtitulo de teste - Vladimir",
        body: "Corpo de testes - Vladimir",
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
