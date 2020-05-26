const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.header('origin') 
    || req.header('x-forwarded-host') || req.header('referer') || req.header('host'));
    next();
});
  
const employee = [
    { id: 1, name: "employee1" },
    { id: 2, name: "employee2" },
    { id: 3, name: "employee3" },
    { id: 4, name: "employee4" }
]

const survey = [
    { id: 1, name: "survey1" },
    { id: 2, name: "survey2" },
    { id: 3, name: "survey3" },
    { id: 4, name: "survey4" },
    { id: 5, name: "survey5" },
    { id: 6, name: "survey6" },
    { id: 7, name: "survey7" },
    { id: 8, name: "survey8" }
]

app.get('/employee', (req, res) => {
    console.log(employee)
    res.json(employee)
});


app.get('/survey', (req, res) => {
    res.json(survey)
});

app.listen(3001)