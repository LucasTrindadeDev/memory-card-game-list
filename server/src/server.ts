import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({
  log: ["query"],
});

app.post("/register", async (req, res) => {
  const body: any = req.body;

  const userAlreadyRegistered = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (userAlreadyRegistered)
    return res.status(401).send("USER ALREADY REGISTERED");

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return res.status(200).json(user);
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
  const { status, take } = req.body;

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
    take,
  });

  return res.status(200).json({ games });
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

app.get("/user/:id/platforms", async (req, res) => {
  const userId = req.params.id;

  const games = await prisma.game.findMany({
    select: {
      name: true,
      platform: true,
    },
    where: {
      userId,
    },
    orderBy: {
      name: "asc",
    },
  });

  const platforms = [...new Set(games.map((item) => item.platform))];

  return res.status(200).json(platforms);
});

app.listen(3333);
