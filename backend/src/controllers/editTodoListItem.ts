import { Request, Response } from "express";
import prisma from "../models/prismaClient";

export const editTodoListItem = async (req: Request, res: Response) => {
  const listId = parseInt(req.params.id);
  const itemId = parseInt(req.params.itemId);

  console.log(`Attempting to update item ${itemId} in list ${listId}`);

  try {
    const updatedItem = await prisma.item.update({
      where: {
        id: itemId,
        listId: listId,
      },
      data: { completed: true },
    });

    console.log(`Updated item:`, updatedItem);
    res.json(updatedItem);
  } catch (err) {
    console.error("Error updating item:", err);
    res
      .status(500)
      .json({ error: "An error occurred while updating the item." });
  }
};
