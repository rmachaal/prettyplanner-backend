import { Request, Response } from "express";
import prisma from "../models/prismaClient";

// GET /todolists - Fetch todo list items by ID
export const getTodoListById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { id } = req.params;

    const todoList = await prisma.todoList.findUnique({
      where: { id: parseInt(id) },
      include: { items: true },
    });

    if (todoList) {
      res.json(todoList);
    } else {
      res.status(404).json({ error: "Todo list not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching todo list" });
  }
};
