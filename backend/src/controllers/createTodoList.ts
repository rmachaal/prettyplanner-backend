import { Request, Response } from "express";
import prisma from "../models/prismaClient";
import { z } from "zod";

// Zod schema
const createTodoListSchema = z.object({
  title: z.string().min(1).max(255),
});

// POST /todolists - Create a new todo list
export const createTodoList = async (req: Request, res: Response) => {
  try {
    const { title } = createTodoListSchema.parse(req.body);

    const createdTodoList = await prisma.todoList.create({
      data: {
        title,
      },
    });

    res.json(createdTodoList);
  } catch (error) {
    console.error("Error creating todo list:", error);
    res.status(500).json({ error: "Error creating todo list" });
  }
};
