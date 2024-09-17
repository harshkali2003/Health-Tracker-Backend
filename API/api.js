const express = require("express");
const cors = require("cors");
require("dotenv").config();
const modelOf = require("../Models/model");


const app = express();

app.use(express.json());
app.use(cors());

app.post("/health-records", async (req, resp) => {
  let data = new modelOf(req.body);
  let result = await data.save();
  if (result) {
    console.log("Data Stored Successfully");
    resp.send(result);
  } else {
    resp.send("ERROR");
  }
});

app.get("/health-records", async (req, resp) => {
  let data = await modelOf.find();
  if (data) {
    console.log("Data fetched successfully");
    resp.send(data);
  } else {
    resp.send("ERROR");
  }
});

app.delete("/health-records/:id", async (req, resp) => {
  let data = await modelOf.deleteOne({ _id: req.params.id });
  if (data) {
    console.log("Record Deleted Successfully");
    resp.send(data);
  } else {
    resp.send("ERROR");
  }
});

app.put("/health-records/:id", async (req, resp) => {
  let data = await modelOf.updateOne({ _id: req.params.id }, { $set: req.body });
  if (data) {
    console.log("Record edited successfully");
    resp.send(data);
  } else {
    resp.send("ERROR");
  }
});

app.get("/health-records/:id", async (req, resp) => {
  let data = await modelOf.findOne({ _id: req.params.id });
  if (data) {
    resp.send(data);
  } else {
    resp.send("ERROR");
  }
});

app.get('/search/:key' , async(req , resp)=>{
    let data = await modelOf.find({
        "$or":[
            {bodyTemperature : {$regex : req.params.key}},
            {bloodPressure : {$regex : req.params.key}},
            {heartRate  : {$regex : req.params.key}}
        ]
    })
    console.log("Searched");
    
    resp.send(data)
})

app.listen(process.env.PORT);
