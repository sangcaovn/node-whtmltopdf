var express = require("express");
var app = express();
var wkhtmltopdf = require('wkhtmltopdf');

app.get('/pdfbox', (req, res) => {
    wkhtmltopdf('https://www.google.com/', { output: 'goole_site.pdf' });
});
  
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
}); 