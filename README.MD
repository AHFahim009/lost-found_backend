vercel link: "https://prisma-sql-assingment-04.vercel.app/"

# full-stack-assignment-04 : Lost and Found System

Welcome to Assignment4! This project is built with TypeScript and Express, using prisma with postgresSQL as the database. Below are the steps to run this project on your local machine.

# Prerequisites:

Make sure you have the following software installed on your machine:

Node.js
npm (Node Package Manager)
Postgres (Make sure postgres is running on your machine)

# Getting Started:

Clone the repository to your local machine:

git clone (git url)

Navigate to the project directory:

cd assignment4

# Install dependencies:

npm install

# Configuration

Create a .env file in the root directory of the project and add the following configurations:

PORT=8000
DATABASE_URL = your_database_url
SECRET_KEY=your_secret_key
Adjust the values according to your preferences. PORT is the port number on which the server will run, MONGODB_URI is the connection string for MongoDB, and SECRET_KEY is a secret key used for encryption (you can generate any random string).

# Building and Running the Project

Build the project: npm run build

Start the server: npm run start-server

This will start the server using ts-node-dev with hot-reloading enabled.

Open your browser and navigate to http://localhost:8000 to access the application.

Scripts:
npm run build: Builds the TypeScript code.
npm run start-server: Starts the server using ts-node-dev with hot-reloading.
npm run lint: Lints the TypeScript code using ESLint.
npm run lint-fix: Lints and automatically fixes the TypeScript code.
npm run format: Formats the code using Prettier.
npm run format-fix: Formats the code and fixes any formatting issues.
npm test: Placeholder for running tests (no tests specified in the current setup).
Feel free to explore the project and modify it according to your needs! If you encounter any issues or have questions, please check the documentation of the used packages or create an issue in the repository.

# Happy coding!
