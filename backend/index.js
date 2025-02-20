const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./Models/db');

const AuthRouter = require('./Routes/AuthRouter');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ping Test
app.get('/ping', (req, res) => res.send('Server is Connected.'));

// API Routes
app.use('/api/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
