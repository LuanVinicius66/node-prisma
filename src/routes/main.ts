import { Router } from "express";
import { prisma } from "../libs/prisma";
import { createUser, createUsers } from "../services/user";
import { count } from "console";

export const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});

mainRouter.post("/user", async (req, res) => {
  // Validar dados recebidos

  const user = await createUser({
    name: "Beto",
    email: "beto778@gmail.com",
    Posts: {
      create: {
        title: "Titulo de teste - Beto",
        body: "Corpo de testes - Beto",
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
