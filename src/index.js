const Airtable = require('airtable');
require('dotenv').config();
let base =  new Airtable({apiKey: `${process.env.TOKEN}`}).base('appLCoWBnloyria7H');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const environment = process.env.NODE_ENV || 'development';
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/individual', (req, res) => {

  base('Thrive Brochures').create([
    {
      "fields": {
        "Email address": req.body.email,
        "Brochure Type": "Individual"
      }
    },
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });


  // Redirect to pdf
  res.statusCode = 301;
  res.setHeader('Location', 'https://assets-global.website-files.com/5f048698055f743dd87fba6e/654c82936d4563a7de62f1e2_Thrive%20Brochure_Individual.pdf');
  res.end();
})

app.listen((process.env.PORT), () => {
  console.log(`http://localhost:${process.env.PORT}`);
  console.log(process.env.NODE_ENV);
})