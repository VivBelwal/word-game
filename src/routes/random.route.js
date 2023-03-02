const express = require("express");
const Random = require("../models/random.model");
const app = express.Router();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let arr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let str = "";
    let lengthWord = Math.floor(Math.random() * 7 + 2);
    for (let i = 0; i < lengthWord; i++) {
      let wordSelctor = Math.floor(Math.random() * 25);
      str += arr[wordSelctor];
    }
    res.status(200).send({ status: "ok", data: str });
  } catch (e) {
    res.status(404).send({ status: "error", message: "Bad request" });
  }
});

app.post("/", async (req,res) =>{
    let {username, score, level} = req.body;
    try{
        let user = await Random.findOne({username, level});
        if(user){
            if(user.score< score){
                await Random.updateOne({username, score, level});
               return res.status(201).send({ status: "ok", message : " You Have created your new best score."});
            }
        }
       let newScore =  await Random.create({username, level,score});
       
return res.status(201).send({ status: "ok"});
    }
    catch(e){
        res.status(404).send({ status: "error", message: "Bad request" });
    }
})

module.exports = app;
