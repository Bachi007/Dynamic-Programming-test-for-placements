var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

codeSchema = new Schema({
	script : String,
    language: String,
    versionIndex: String,
    clientId: String,
	clientSecret: String
}),

Code = mongoose.model('Codes', codeSchema);

module.exports = Code;
