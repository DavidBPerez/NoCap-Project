const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const path = require('path');
const axios = require("axios")
const bodyParser = require("body-parser")
// const cors = require('cors'); // Import CORS middleware -- TBD

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// TBD -- Enable CORS for requests from http://localhost:3000
// app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.static(path.resolve(__dirname, '../../client/dist')));

const apiKey = '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';
const model = 'EleutherAI/gpt-neo-2.7B';

app.use(bodyParser.json());
app.post("/generate/initial", async (req, res) => {
  const stories = ["You are adventurous.", "You are conscientous.", "You are incredibly friendly", "You are a happy-go-lucky person.", "You are an emotional person."]; //change later to req.body.prompt
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/gpt2-medium',
      {
        inputs: stories,
        parameters: {
          max_length: 200,
        }
      },
      {
        headers: {
          'Authorization': 'Bearer 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'
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(500).send({ message: error.response ? error.response.data : "An error occurred." });
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
