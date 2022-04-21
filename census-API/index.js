const express = require('express');
const cors = require('cors');
const app=express();
app.use(cors());
app.options('*', cors());

const pool=require('./db');
const { response, json } = require('express');
const PORT=process.env.PORT || 8080;

app.use(express.urlencoded())

app.listen(
    PORT,
    ()=>{console.log(`Alive on ${PORT}`)
    });

app.get('/listAll',(req,res)=>{
    let sql = 'SELECT * FROM income';

    pool.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          res.json(results);
          
        });
});