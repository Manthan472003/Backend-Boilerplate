require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const sequelize = require('../Database/Config/config');
const userRoutes = require('./Routes/userRoutes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API STARTED!!!');
});

app.use('/users', userRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});

module.exports = app;