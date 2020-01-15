const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

//Set Handlebars as the view engine
const expHandlebars = require('express-handlebars');

app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/css", express.static(path.join(__dirname, '/public/assets/css')));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Get Routing 
app.get('/poll', (req, res) => {
    res.render('index')
});


//Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
