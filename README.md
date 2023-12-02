# NoCap Project

Welcome to the NoCap Project, this is a test-based adventure game for personality analysis. This README provides instructions for building and running the project. For the full and most optimized experience we recommended only following the instructions below and paying attention to the `Note` section at the bottom.

## Instructions to Run Application
1. Open the `No-Cap Manual` guide provided for additional tips.
2. Click this link: [https://no-cap-project-ethanpeeler.replit.app/]
3. Enjoy! Note:
   * No download is required.
   * Some notes in the below instructions may apply.

If you wish to test via replit:
1. In the `About` section of the github repo page for the project.
2. Click the link to go to the Replit page.
3. Click the big green or blue `Start` button and wait for the application to load.
4. Have fun! Note:
  - Some features may be buggy if not signed into a Replit account, but it is still accessible.
  - Due to domain restrications Google (firebase) sign-in may not work due to domain restrictions. To circumvent, do either of the following:
    *  Use the normal sign-up or sign-in instead.
    *  Sign into a Replit account and try again (access may be granted from a NoCap member if it proves to be necessary).
  - Default sign-in (not google) also has a recent unknown issue where the sign-in button produces not results, if this occurs just use the Google sign-in or sign-up.
  - As a firebase security feature, if signing up passwords may need to meet minimum complexity or length requirement. This may be the issue if your sign-up button does nothing.

## Project folder Structure
- `client/`: React application code.
  - `dist/`: Static react files.
  - `public/`: Files/images cached by user and site.
  - `src/`: Root for source code and React main.
    * `atoms/`: Source code managing page/data states.
    * `cache_data/`: Potential location for local DB game saves.
    * `components/`: Source code for webpage logic and components.
      * `adventures/`: Source code for handling adventure scenes.
    * `controllers/`: Source code handling logic external from the application.
    * `views/`: Source code for webpage loading and logic.
- `server/`: Depreciated node server code (Unnecessary with replit hosting).
- `clientDocs/`: Code worklogs.

## Client Setup (Optionally Provided)
To build and run the React client (if on local machine):

1. Navigate to the `cd client` directory.
2. Install client dependencies using `npm install`.
3. To build the client for production:
    - Run `npm run build`: Creates a "build" directory in the client with an optimized production build.
    - Use this command whenever changes are finished in the React code.

## Server Setup (Optionally Provided -!Potentially Depreciated!)
To run the server, follow these steps (if on local machine):

1. Navigate to the `cd server` directory.
2. Install server dependencies using `npm install`.
3. To start the server:
    - Run `npm run server`.
      * This will run the server logic (if any).

## Running Both Client and Server Together (Optionally Provided)
For development, use the provided scripts (if on local machine):

- `npm run build_both`: This command concurrently starts both the client and server during development.
  * Use this when you want to run the client and server together for development purposes.
- `npm run client_server`: This command builds the client application and starts the server.
  * Use this when you want to build and serve the client and start the server together.
  * Note: You may need to have the Replit hosted website link to still view the page.

## Bash Scripts (Optionally Provided)
Two bash scripts provided:

- `build_and_run.sh`: Builds the client and starts the server.
  * Execute by running `bash build_and_run.sh`.
  * Creates a "dist" directory for static React files and builds app.
- `run.sh`: Installs dependencies, build React client, and runs app on server.
  * Execute by running `bash run.sh`.
  * Create static directory and builds/runs app. Also handles `npm install`.

## Note
- This app utilizes Firebase authentication/database API for users and Replit hosting.
- Server has been depreciated since our application is both developed and hosted in Replit.
- We have optionally provided methods to install and test/develop the code yourself on a local machine, but this is not recommended. If you do though be sure you have Node.js installed if building/running the project, and also run `npm install` to ensure all dependencies are met.
- Building and running the project locally is untested and may produce either unstable or no results from the application code.
 
