import { Request, Response } from "express";
import prisma from "../models/prismaClient";
import { z } from "zod";

// Zod schema
const addItemToListSchema = z.object({
  content: z.string().min(1).max(255),
});

// POST /todolists/:id/items - Add an item to a todo list
export const addItemToList = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { content } = addItemToListSchema.parse(req.body);

    const createdItem = await prisma.item.create({
      data: {
        content,
        list: { connect: { id: parseInt(id) } },
      },
    });

    res.json(createdItem);
  } catch (error) {
    console.error("Error adding item to todo list:", error);
    res.status(500).json({ error: "Error adding item to todo list" });
  }
};
