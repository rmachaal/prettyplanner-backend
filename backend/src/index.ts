import express, { Request, Response } from "express";
import cors from "cors";
import { getAllTodoLists } from "./controllers/getAllTodoLists";
import { getTodoListById } from "./controllers/getTodoListById";
import { createTodoList } from "./controllers/createTodoList";
import { addItemToList } from "./controllers/addItemToList";
import { deleteTodoList } from "./controllers/deleteTodoList";
import { removeItemFromList } from "./controllers/removeItemFromList";

const app = express();
const port = process.env.PORT || 3300;

app.use(cors());
app.use(express.json());

// test route to check if the server is running correctly
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Routes for Todo Lists
app.get("/todolists", getAllTodoLists);
app.get("/todolists/:id", getTodoListById);
app.post("/todolists", createTodoList);
app.post("/todolists/:id/items", addItemToList);
app.delete("/todolists/:id", deleteTodoList);
app.delete("/todolists/:id/items/:itemId", removeItemFromList);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
