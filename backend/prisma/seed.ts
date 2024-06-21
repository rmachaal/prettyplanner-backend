import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // initial to-do lists
    const todoList1 = await prisma.todoList.create({
      data: {
        title: "First Todo List",
        items: {
          create: [
            { content: "First item", completed: false },
            { content: "Second item", completed: false },
          ],
        },
      },
    });

    const todoList2 = await prisma.todoList.create({
      data: {
        title: "Second Todo List",
        items: {
          create: [
            { content: "Third item", completed: true },
            { content: "Fourth item", completed: false },
          ],
        },
      },
    });

    console.log("Seed data created successfully:", { todoList1, todoList2 });
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
