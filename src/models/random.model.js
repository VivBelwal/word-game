const {Schema, model} = require("mongoose");

const RandomSchema = new Schema({
    username : {type : String},
    score : {type : String},
    level : {type : String},

});

const Random = model("random", RandomSchema);

module.exports = Random;