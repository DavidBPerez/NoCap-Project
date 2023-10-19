const express = require("express")
const path = require("path")

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the Vite build
app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
