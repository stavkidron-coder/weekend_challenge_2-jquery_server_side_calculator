const express = require('express'); //brings in express
const bodyParser = require('body-parser'); //brings in body-parser

const app = express(); //creates an instance of express
const port = 5000; // sets the port

const equationArrayData = require('./modules/equationArrayData'); // imports the equationArrayData array

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/equationArrayData', (req, res) => {
    res.send(equationArrayData);
})

app.get('/total', (req, res) => {
    res.send(equationArrayData);
})

app.post('/submitData', (req, res) => {
    equationArrayData.push(req.body);
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log('Up and running on port:', port);  
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGIC // LOGIC // LOGIC // LOGIC // LOGIC // LOGIC // LOGIC // LOGIC // LOGIC // LOGIC // LOGIC // LOGIC //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

