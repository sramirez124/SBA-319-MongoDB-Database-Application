require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose');

app.get('/', (req, res) => {
        res.send('Its working!')
})
    
app.listen(PORT, () => {
        console.log(`Matrix is running on port: ${PORT}`)
})

