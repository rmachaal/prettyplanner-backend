import { Request, Response } from "express";
import prisma from "../models/prismaClient";

// GET /todolists - Fetch all todo lists
export const getAllTodoLists = async (req: Request, res: Response) => {
  try {
    const todoLists = await prisma.todoList.findMany();
    res.json(todoLists);
  } catch (error) {
    console.error("Error fetching todo lists:", error);
    res.status(500).json({ error: "Error fetching todo lists" });
  }
};
