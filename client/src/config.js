let serverURL;
if (process.env.NODE_ENV === 'production') {
  // Use vite/replit production server URL
  serverURL = 'https://nocap-project.ethanpeeler.repl.co';
} else {
  // Use local development server URL
  serverURL = 'http://localhost:3000';
}

export default serverURL;
