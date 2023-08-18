const express = require('express');
const app = express();
const PORT = 2050;

app.get('/', (req, res) => {
    res.send({msg:'I am a homepage!'});
});

app.get('/about', (req, res) => {
    res.send({msg: 'I am a about page!'})
});

app.get('/contact', (req, res) => {
    res.send({email: 'support@pwskills.com'})
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})