const express = require('express');

const app = express();

app.use('/', express.static('public'))

app.get('/', (req, res) => {
    res.send('<h1>Hello, My Server!</h1>')
});

app.get('/getData', (req, res) => {
    const {
        number
    } = req.query;

    if (!number) {
        res.send('Lack of Parameter');
        return
    }

    const int = parseInt(number, 10);

    if (isNaN(int)) {
        res.send('Wrong Parameter');
        return
    }

    const result = (1 + int) * int * 0.5;
    const resultText = result.toString();
    res.send(resultText);
});


app.listen(3000, () => {
    console.log('The app is running on localhost:3000!')
});