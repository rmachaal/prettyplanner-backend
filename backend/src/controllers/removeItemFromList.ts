import { Request, Response } from "express";
import prisma from "../models/prismaClient";

// DELETE /todolists/:id/items/:itemId - Remove an item from a todo list
export const removeItemFromList = async (req: Request, res: Response) => {
  const { id, itemId } = req.params;

  try {
    await prisma.item.delete({
      where: {
        id: parseInt(itemId),
      },
    });

    res.json({ message: "Item deleted from todo list successfully" });
  } catch (error) {
    console.error("Error deleting item from todo list:", error);
    res.status(500).json({ error: "Error deleting item from todo list" });
  }
};
