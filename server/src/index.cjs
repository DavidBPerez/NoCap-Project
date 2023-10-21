const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

/**
  // Handle client-side routing
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
  });
*/

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
