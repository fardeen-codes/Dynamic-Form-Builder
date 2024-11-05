const express = require('express');
const registerRoute = require('./routes/register.route')
const cors = require('cors');
const dbConnect = require('./config/database')
const app = express();

app.use(express.json());

const corsOptions = {
    origin: ['http://localhost:5173/Application-Form/', 'http://localhost:5173'],
    credentials: true,
    methods: 'GET, POST, PUT, DELETE'
}

app.use(cors(corsOptions));

dbConnect();

app.use('/api/users', registerRoute);

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(8080, () => {
    console.log("Port:  8080")
})