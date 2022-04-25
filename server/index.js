const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

//TODO: add middlewares

//TODO: add controllers
const usersController = require('./controllers/users');
const insurancesController = require('./controllers/insurances');

start();

async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/avstrogroup', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log('Database ready!');
    } catch (err) {
        console.error('Database connection failed!');
        process.exit(1);
    }

    const app = express();
    app.use(express.json());
    app.use(cors({
        origin: 'http://localhost:4200',
        credentials: true,
    }));
    app.use(cookieParser('some-secret'));

    app.use('/users', usersController);
    app.use('/insurances', insurancesController);

    app.get('/', (req, res) => res.json({ message: 'REST Service Operational' }));

    app.listen(3030, () => console.log('REST Service started on port 3000'));
}