const express = require('express');
const port = 3003;
const app = express()
app.get('/', (req, res) => {
    res.send('<h1><b>HTML Segment</b></h1>')
  })
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})