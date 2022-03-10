// const express = require('express');
// const app = express();

// // app.enable("case sensitive routing");

// app.get('/home', (req, res) => {
//   res.send('Hello World!');
// }   );

// app.listen(5000)

// import dotenv from 'dotenv';
require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // buat kondisi ketika kita jalankan 5000 maka portnya ada di production, else berarti di development
  let status = process.env.NODE_ENV === 5000? 'production' : 'development';
  res.send(`woii lu masuk sebagai : ${status} APP`);
});

app.listen(process.env.PORT, function(){
  console.log(`lo menggunakan port ${process.env.PORT}`);
}); 