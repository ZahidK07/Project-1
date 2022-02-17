let express = require ('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongoUrl = "mongodb://localhost:27017";
const mongoUrl = "mongodb+srv://test:test123@cluster0.cq0s5.mongodb.net/Zomato?retryWrites=true&w=majority";
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 5246;
var db;


//get request
app.get('/', (req,res)=>{
    res.send('Welcome to express')
})

/*API to get restaurant data by locactionList*/
app.get('/locactionList',(req,res)=>{
    db.collection('locactionList').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
/*API to get restaurant data by locactionList*/

/*API to get restaurant data by state_id*/
// line>>> 27 : data frm Url always comes in str so convert it into Number
app.get('/restoList', (req,res)=>{
    let stateId = Number(req.query.state_id);
    let mealId =  Number(req.query.meal_id);
    let query = {};
    if(stateId && mealId){
        query = {'mealTypes.mealtype_id':mealId,state_id:stateId}
    } 
    else if(mealId){
        query = {state_id:stateId}
    }
    else if(mealId){
        query = {"mealTypes.mealtype_id":mealId}
    }
    console.log('>>>>restId',stateId)
    db.collection('restoList').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
/*API to get restaurant data by state_id*/

/*API to get restaurant data by mealtype*/
app.get('/meal',(req,res)=>{
    db.collection('meal').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
/*API to get restaurant data by mealtype*/

// use connection.db to call for Mongo Local Data
//use client.db to call Mongo Cloud Data
MongoClient.connect(mongoUrl, (err, client)=>{
    if(err) console.log("Error While connecting");
    db = client.db('Zomato');
    app.listen(port,()=>{
        console.log(`Listenig to port no ${port}`)
    })
})












        


