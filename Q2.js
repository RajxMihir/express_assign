const express = require('express');
const app = express();

let counter = 0;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({counter});
});

app.post('/increment', (req, res) => {
    counter++;
    res.json({counter});
});

app.post('/decrement', (req, res) => {
    counter--;
    res.json({counter});
});

const PORT = 2100;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${2100}`);
});
