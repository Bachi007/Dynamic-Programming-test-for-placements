var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

answerSchema = new Schema({
	studentname:String,
	question: String,
	useranswer: String,
	language:String
}),
{ typeKey: '$type' }
 Answer = mongoose.model('answers', answerSchema);



module.exports = Answer;
