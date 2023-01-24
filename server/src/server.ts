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
  const userId = req.params.id;
  const body: any = req.body;

  const game = await prisma.game.create({
    data: {
      id: body.id,
      name: body.name,
      cover: body.cover,
      status: body.status,
      platform: body.platform,
      userId,
    },
  });

  return res.status(200).json(game);
});

app.get("/user/:id/saved-games", async (req, res) => {
  const userId = req.params.id;

  const games = await prisma.game.findMany({
    select: {
      id: true,
      name: true,
      cover: true,
      status: true,
      platform: true,
    },
    where: {
      userId,
    },
    orderBy: {
      status: "asc",
    },
  });

  return res.status(200).json(games);
});

app.listen(3333);
