var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

programSchema = new Schema({
	adminname:String,
	question: String,
	answer: String,
	description: String,
	language:String
}),

 Program = mongoose.model('Programs', programSchema);



module.exports = Program;
