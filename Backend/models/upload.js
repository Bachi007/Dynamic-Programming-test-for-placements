var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

testSchema = new Schema({
	adminname:String,
	question: String,
	language:String
}),

Upload = mongoose.model('Uploads', testSchema);
module.exports = Upload;