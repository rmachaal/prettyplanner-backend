# PrettyPlanner (backend)

This repository contains the backend for a To-Do List application, built with Express.js, TypeScript, Prisma ORM, and MySQL.

## Hosted API

The live version of this API is hosted [here](https://prettyplanner-api.onrender.com/todolists).

## API Endpoints

- `GET /todolists`: Fetch all to-do lists
- `GET /todolists/:id`: Fetch todo list items by ID
- `POST /todolists`: Create a new to-do list
- `DELETE /todolists/:id`: Delete a to-do list
- `POST /todolists/:id/items`: Add an item to a list
- `DELETE /todolists/:id/items/:itemId`: Remove an item from a list

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- MySQL
- Zod (for data validation)

## Prerequisites

- Node.js (v14 or later)
- MySQL database

## Setup Instructions

1. Clone the repository:

`git clone https://github.com/rmachaal/prettyplanner-backend.git`

2. Install dependencies:

`cd backend`
`npm install`

3. Set up environment variables:

Create a `.env` file in the root directory with the following variable:

`DATABASE_URL="mysql://username:password@mysql-hostname.cloud-provider.com:3306/todo_db"`

Replace the `DATABASE_URL` with your MySQL connection string and `username`, `password`, and `todo_db` with your MySQL credentials and desired database name.

4. Set up the database:

`npx prisma migrate dev`

5. (Optional) Seed the database with initial data:

`npx ts-node prisma/seed.ts`

(This project includes a seed file to populate your database with initial data.)

5. Start the development server:

`npm run dev`

The server should now be running on `http://localhost:3000`.

## Building for Production

To compile TypeScript to JavaScript:

`npm run build`

To start the production server:

`npm start`
