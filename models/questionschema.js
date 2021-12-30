const mongoose=require('mongoose');
const questionsSchema=new mongoose.Schema({
    name:String,
    url:String,
    sub:String,
    done:String
})

const Question = mongoose.model('Question', questionsSchema);

module.exports = Question;
