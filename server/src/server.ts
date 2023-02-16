import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
  log: ["query"],
});

app.post("/user/:id/save-game", async (req, res) => {
  const userId: string = req.params.id;
  const body: any = req.body;
  const id: string = body.id;

  const gameAlreadySaved = await prisma.game.findUnique({
    where: {
      id_userId: {
        id: id,
        userId: userId,
      },
    },
  });

  if (gameAlreadySaved) return res.status(401).send("GAME ALREADY SAVED");

  const game = await prisma.game.create({
    data: {
      id: body.id,
      name: body.name,
      box_art_url: body.box_art_url,
      status: body.status,
      platform: body.platform,
      userId,
    },
  });

  return res.status(200).json(game);
});

app.post("/user/:id/saved-games", async (req, res) => {
  const userId = req.params.id;
  const status = req.body.status;

  const games = await prisma.game.findMany({
    select: {
      id: true,
      name: true,
      box_art_url: true,
      status: true,
      platform: true,
    },
    where: {
      userId,
      status,
    },
    orderBy: {
      name: "asc",
    },
  });

  return res.status(200).json(games);
});

app.get("/user/:userId/saved-games/:id", async (req, res) => {
  const userId = req.params.userId;
  const id = req.params.id;

  const game = await prisma.game.findMany({
    select: {
      id: true,
      name: true,
      status: true,
      platform: true,
    },
    where: {
      id,
      userId,
    },
  });

  return res.status(200).json(game);
});

app.put("/user/:userId/saved-games/:id", async (req, res) => {
  const userId = req.params.userId;
  const id = req.params.id;
  const body: any = req.body;

  const updateGame = await prisma.game.updateMany({
    where: {
      id,
      userId,
    },
    data: {
      status: body.status,
    },
  });

  return res.status(200).json(updateGame);
});

app.delete("/user/:userId/saved-games/:id", async (req, res) => {
  const userId = req.params.userId;
  const id = req.params.id;

  const deleteGame = await prisma.game.deleteMany({
    where: {
      id,
      userId,
    },
  });

  return res.status(200).json(deleteGame);
});

app.listen(3333);
