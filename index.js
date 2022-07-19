const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Salam Muafakat!');
});

app.get('/johor', (req, res) => {
    res.json({ data: "Salam Muafakat" });
});

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});