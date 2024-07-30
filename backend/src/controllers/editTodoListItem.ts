import { Request, Response } from "express";
import prisma from "../models/prismaClient";

export const editTodoListItem = async (req: Request, res: Response) => {
  const itemId = req.params.id;
  try {
    const updatedItem = await prisma.item.update({
      where: { id: parseInt(itemId) },
      data: { completed: true },
    });
    res.json(updatedItem);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while updating the item." });
  }
};
