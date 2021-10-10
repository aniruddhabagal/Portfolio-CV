const express=require('express');
const path=require('path')
const mysql=require('mysql');

const app = express();
const port=process.env.PORT || 5555;

app.use(express.static('../client'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/index.html'));    
})

const pool=require('../server/pools')

let data="";
app.post('/search',(req,res)=>{

    let searchQuery=req.body.value;
    let sql="SELECT <coloumn> FROM <tablename> WHERE <coloumn> like ?";
    pool.getConnection((err,connection)=>{
        if(err) throw err;

        connection.query(sql,'%'+searchQuery+'%',(err,results)=>{

            connection.release();

            if(!err){
                console.log(sql);
                console.log(results);
                data=JSON.stringify(results);

            }else{
                console.log(err);
            }
        })
        
    })


    
})
app.get('/search',(req,res)=>{
    res.send(data)
})

app.listen(5555,console.log("Server Runing on 5555"))
