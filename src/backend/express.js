import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('express works!');
});

app.listen(5173);
