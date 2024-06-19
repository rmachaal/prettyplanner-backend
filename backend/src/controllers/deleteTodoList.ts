import { Request, Response } from "express";
import prisma from "../models/prismaClient";

// DELETE /todolists/:id - Delete a todo list
export const deleteTodoList = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedTodoList = await prisma.todoList.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json({ message: "Todo list deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo list:", error);
    res.status(500).json({ error: "Error deleting todo list" });
  }
};
