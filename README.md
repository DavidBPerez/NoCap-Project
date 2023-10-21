# NoCap Project

Welcome to the NoCap Project, a test-based adventure game for personality analysis. This README provides instructions for building and running the project.

## Project Structure
- `client/`: Client-side React application.
- `server/`: Server-side code for handling game logic.
- `clientDocs/`: Documentation and worklogs.

## Client Setup (**Known Issues with Replit)
To build and run the React client:

1. Navigate to the `cd client` directory.
2. Install client dependencies using `npm install`.
3. To build the client for production:
    - Run `npm run build`: Creates a "build" directory in client with optimized production build.
    - Use this command whenever changes are finished to React code.

## Server Setup
To run the server, follow these steps:

1. Navigate to the `cd server` directory.
2. Install server dependencies using `npm install`.
3. To start server:
    - Run `npm run server`. This will run the server logic.

## Running Both Client and Server Together
For development, use the provided scripts:

- `npm run build_both`: This command concurrently starts both the client and server during development.
- `npm run client_server`: This command builds the client application and starts the server.

## Bash Scripts (Use These)
Two bash scripts are also provided:

- `run.sh`: Builds React app and serves it using the React development server. 
  * Execute by running `bash run.sh`.
- `build_and_run.sh`: Builds client and starts server.
  * Execute by running `bash build_and_run.sh`.
  * Creates a "dist" directory in public with static React files.

## Note
- Ensure you have Node.js installed for building/running project.
