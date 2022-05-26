 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 userSchema = new Schema( {
	
	 unique_id: Number,
	 role: String,
	 email: String,
	 username: String,
	 password: String,
	 passwordConf: String,
	 Scores:Array

 }),

User = mongoose.model('Users', userSchema);

module.exports = User;


// testSchema = new Schema({
// 	adminname:String,
// 	question: String,
// 	option1: String,
// 	option2: String,
// 	option3: String,
// 	option4: String,
// 	answer: String,
// 	language:String
// }),

// Upload = mongoose.model('Uploads', testSchema);


// codeSchema = new Schema({
// 	script : String,
//     language: String,
//     versionIndex: String,
//     clientId: String,
// 	clientSecret: String
// }),

// Code = mongoose.model('Codes', codeSchema);

// mailSchema = new Schema({
// 	from: String,
//     to: String,
//     subject: String,
//     text: String
// }),

// Mail = mongoose.model('Mails', codeSchema);
// programSchema = new Schema({
// 	adminname:String,
// 	question: String,
// 	answer: String,
// 	description: String,
// 	language:String
// }),

//  Program = mongoose.model('Programs', programSchema);



// module.exports = Program;

// module.exports = Code;


// module.exports = Upload;
