import { Request, Response } from "express";
import prisma from "../models/prismaClient";

export const editTodoListItem = async (req: Request, res: Response) => {
  const itemId = req.params.id;
  const listId = req.params.listId;

  try {
    const updatedItem = await prisma.item.update({
      where: {
        id: parseInt(itemId),
        listId: parseInt(listId),
      },
      data: { completed: true },
    });

    console.log(`Updated item ${itemId} in list ${listId}:`, updatedItem);
    res.json(updatedItem);
  } catch (err) {
    console.error("Error updating item:", err);
    res
      .status(500)
      .json({ error: "An error occurred while updating the item." });
  }
};