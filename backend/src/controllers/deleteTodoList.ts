import { Request, Response } from "express";
import prisma from "../models/prismaClient";

// DELETE /todolists/:id - Delete a todo list and its items
export const deleteTodoList = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const itemsToDelete = await prisma.item.findMany({
      where: {
        listId: parseInt(id),
      },
    });

    await prisma.item.deleteMany({
      where: {
        listId: parseInt(id),
      },
    });

    await prisma.todoList.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json({
      message: "Todo list and associated items deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting todo list and associated items:", error);
    res
      .status(500)
      .json({ error: "Error deleting todo list and associated items" });
  }
};
