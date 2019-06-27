var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Upload = require('../models/upload');
var Code = require('../models/code');
var Program = require('../models/program');
// var Mail = require('../models/user');
// var request = require('request');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var fs = require('fs')
var url = "mongodb+srv://bachi:2505@cluster0-uuwi9.mongodb.net/test?retryWrites=true&w=majority";
var request = require('request')
//  mongoose.connect('mongodb+srv://surya:surya123@cluster0-an1i8.mongodb.net/test?retryWrites=true');
// var Schema = mongoose.Schema;

router.get('/exam', function (req, res, next) {

	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		// var dbo=db.db("test");
		Upload.find(function (err, result) {
			if (err) throw err;

			res.send(result);
			console.log(result);
			// db.close();
		});
	})
});

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});

router.post('/register', function (req, res, next) {
	console.log(req.body);
	var personInfo = req.body;


	if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({ email: personInfo.email }, function (err, data) {
				if (!data) {
					var c;
					User.findOne({}, function (err, data) {

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						} else {
							c = 1;
						}

						var newPerson = new User({
							unique_id: c,
							role: personInfo.role,
							email: personInfo.email,
							username: personInfo.username,
							password: personInfo.password,
							passwordConf: personInfo.passwordConf
						});

						newPerson.save(function (err, Person) {
							if (err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({ _id: -1 }).limit(1);
					res.send({ "Success": "You are regestered,You can login now." });
				}

				else {
					res.send({ "Success": "Email is already used." });
				}

			});
		} else {
			res.send({ "Success": "password is not matched" });
		}
	}
});

router.get('/login', function (req, res, next) {
	return res.render('login.ejs');


});


router.post('/checkLogic', function (req, res) {
	console.log(req.body)
	// fs.writeFile("temp.txt", req.body.script, (err) => {
	// 	if (err) console.log(err);
	// 	console.log("Successfully Written to File.");
	// 	fs.readFile("temp.txt", "utf-8", (err, data) => {
	//console.log(data);
	// let scriptdata=data.toString()
	// console.log(scriptdata)
	let reqdata = {
		script: req.body.script,
		language: req.body.language,
		versionIndex: "0",
		clientId: "3c19ebd0248902a55b97eb198626bac3",
		clientSecret: "d8bf1142581a56e13f82dfef569cd446929db1abd494f4ef9d9287f656c156c5"
	}
	request.post({
		headers: { 'Content-type': 'application/json' },
		url: 'https://api.jdoodle.com/execute',
		body: JSON.stringify(reqdata)

	}, function (error, response, body) {
		console.log('Response From', body);
		res.end(body)
	});
	//});
	// });

})


router.post('/login', function (req, res, next) {
	//console.log(req.body);
	var username = req.body.username;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = User.findOne({ username }).select('username email role password Scores -_id');
		query.exec(function (err, data) {

			// User.findOne({username:req.body.username},function(err,data){
			if (data) {
				if (data.password == req.body.password) {
					console.log("Done Login");
					res.send({ "Success": "Success!", 'data': data });
				} else {
					res.send({ "Success": "Wrong password!", 'data': data });
				}
			} else {
				res.send({ "Success": "This user Is not regestered!", 'data': data });
			}
			//  res.send(data);
			console.log(data);
		});
	});
});

router.post('/getUserdata', function (req, res, next) {
console.log(req.body)
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = User.findOne({ username:req.body.username }).select('username email role password Scores -_id');
		query.exec(function (err, data) {

			// User.findOne({username:req.body.username},function(err,data){
			if (data) {
			
				res.send( data );
			}
			//  res.send(data);
			console.log(data);
		});
	});
});
router.get('/profile', function (req, res, next) {
	console.log("profile");
	User.findOne({ unique_id: req.session.userId }, function (err, data) {
		console.log("data");
		console.log(data);
		if (!data) {
			res.redirect('/');
		} else {
			//console.log("found");
			return res.render('data.ejs', { "name": data.username, "email": data.email });
		}
	});
});

router.get('/logout', function (req, res, next) {
	console.log("logout")
	if (req.session) {
		// delete session object
		req.session.destroy(function (err) {
			if (err) {
				return next(err);
			} else {
				return res.redirect('/');
			}
		});
	}
});

// router.get('/forgetpass', function (req, res, next) {
// 	res.render("forget.ejs");
// });
// router.post('/forgetpass', function (req, res, next) {
// 	//console.log('req.body');
// 	//console.log(req.body);
// 	User.findOne({email:req.body.email},function(err,data){
// 		console.log(data);
// 		if(!data){
// 			res.send({"Success":"This Email Is not regestered!"});
// 		}else{
// 			// res.send({"Success":"Success!"});
// 			if (req.body.password==req.body.passwordConf) {
// 			data.password=req.body.password;
// 			data.passwordConf=req.body.passwordConf;

// 			data.save(function(err, Person){
// 				if(err)
// 					console.log(err);
// 				else
// 					console.log('Success');
// 					res.send({"Success":"Password changed!"});
// 			});
// 		}else{
// 			res.send({"Success":"Password does not matched! Both Password should be same."});
// 		}
// 		}
// 	});

// });

// router.get('/', function (req, res, next) {
// 	return res.render('test.ejs');
// });

router.post('/admin/upload', function (req, res, next) {
	// console.log(req.body);
	var questions = req.body;


	var question = new Upload({
		adminname: req.body.adminname,
		question: req.body.question,
		language: req.body.language
	});
	console.log(question)
	question.save(function (err, Result) {
		if (err) {
			var data = {
				"status": "something went wrong",
				"data": err
			}
			res.json(data);
			res.status(500)
		} else {
			var data = {
				"status": "success",
				"data": Result
			}
			res.json(data);
			res.status(200)
		}

	});
});

// }).sort({_no: -1}).limit(1);
// res.send({"Success":"Quesions are uploaded."});
// });

// else{
// res.send({"Success":"Failed."});
// }

// });
// }else{
// res.send({"Success":"failed to upload"});
// }
// }
// });
router.post('/compile', function (req, res, next) {
	// console.log(req.body);
	//var program = req.body;

	var program = new Code({
		script: req.body.script,
		language: req.body.language,
		versionIndex: req.body.versionIndex,
		clientId: "b813a210159f497f7cd01aead5a4d4f1",
		clientSecret: "eeb4f4327fbc3cebaaa30f6eedeffa4620a8341f9b32df5d336d74eb8c0f8158"
	});
	console.log('program:', program)
	program.save(function (err, result) {
		if (err)
			console.log(err);
		else
			res.send(result);
		// console.log('Success');
	});
	request({
		url: 'https://api.jdoodle.com/execute',
		method: "POST",
		json: program
	},
		function (error, response, body) {
			console.log('error:', error);
			console.log('statusCode:', response && response.statusCode);
			console.log('body:', body);

		});
	// console.log(program)
});


router.post('/admin/script', function (req, res, next) {
	// console.log(req.body);
	// var questions = req.body;


	var program = new Program({
		adminname: req.body.adminname,
		question: req.body.question,
		answer: req.body.answer,
		description: req.body.description,
		language: req.body.language
	});
	console.log(program)
	program.save(function (err, Result) {
		if (err) {
			var data = {
				"status": "something went wrong",
				"data": err
			}
			res.json(data);
			res.status(500)
		} else {
			var data = {
				"status": "success",
				"data": Result
			}
			res.json(data);
			res.status(200)
		}

	});
});


router.post('/user/details', function (req, res) {
	var username = req.body.username;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = User.find({ username }).select('username email role -_id');
		query.exec(function (err, User) {

			if (err) throw err;
			res.send(User);
			console.log(User);
		});
	});
});

router.post('/user/details/all', function (req, res) {
	var role = req.body.role;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		// var role='user';
		var query = User.find({ role }).select('username email  -_id');
		query.exec(function (err, User) {

			if (err) throw err;
			res.send(User);
			console.log(User);

		});
	});
});

router.get('/admin/scriptretrive', function (req, res) {
	// var admin_name=req.body.admin_name;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = Program.find({}).select('adminname question answer description language -_id');
		query.exec(function (err, Program) {

			if (err) throw err;
			res.send(Program);
			console.log(Program);
		});
	});
});

router.post('/admin/scriptretrive/name', function (req, res) {
	var adminname = req.body.adminname;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = Program.find({ adminname }).select('question answer description language -_id');
		query.exec(function (err, Program) {

			if (err) throw err;
			res.send(Program);
			console.log(Program);
		});
	});
});

router.post('/admin/scriptretrive/language', function (req, res) {

	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = Program.find(req.body.language).select('adminname question answer description language -_id').limit(1).skip(1 * page);
		query.exec(function (err, Program) {

			if (err) throw err;
			res.send(Program);
			console.log(Program);
		});
	});
});


router.get('/admin/retrive', function (req, res) {
	// var admin_name=req.body.admin_name;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = Upload.find({}).select('adminname question option1 option2 option3 option4 answer language -_id');
		query.exec(function (err, Upload) {

			if (err) throw err;
			res.send(Upload);
			console.log(Upload);
		});
	});
});

router.post('/admin/retrive/name', function (req, res) {
	var adminname = req.body.adminname;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = Upload.find({ adminname }).select('_id,adminname question option1 option2 option3 option4 answer language ');
		query.exec(function (err, Upload) {

			if (err) throw err;
			res.send(Upload);
			console.log(Upload);
		});
	});
});
router.post('/admin/modify', function (req, res) {
	//  var question=req.body.question;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		Upload.findOneAndUpdate({_id:req.body.id}, {$set:{question:req.body.question}}, {new: true}, (err, doc) => {
			if (err) {
				var response="Something wrong when updating data!"
				
			}
		else{
			console.log('response',doc);
			response="Updated Sucessfully"
           
		}
		res.send({"status":response})	
		});
	})
	// 	   Upload.findOne({question},function(err,result){
	// 	 	  if(err) throw err;
	// 	   		res.send(result);
	// 	 	console.log(result);
	// 	Upload.save(function (err, result) {
	// 		if (err)
	// 			throw err;
	// 		else
	// 			console.log("updated")
	// 		console.log(result);
	// 	})
	// });
});


router.post('/admin/retrive/language', function (req, res) {
	var language = req.body.language;
	//var page = Math.max(0, req.body.page);

	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query1 = Upload.find({ language }).select('adminname question option1 option2 option3 option4 answer -_id')
		var query = Upload.find({ language }).select('adminname question option1 option2 option3 option4 answer -_id').limit(10)

		query1.exec(function (err, Upload) {
			if (err) throw err;

			console.log(Upload.length);

			query.exec(function (err, Upload1) {

				if (err) throw err;
				let response=[{
					count:Upload.length
				},
				{Questions:Upload1}
			]
				res.send(response);
				//console.log(Upload1);
			});
		})
	});
});
router.post('/insertScore', function (req, res) {
	//  var question=req.body.question;
	console.log('resquest',req.body)
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		User.findOneAndUpdate({username:req.body.user}, {$push:{Scores:[{language:req.body.language,score:req.body.score}]}}, {new: true}, (err, doc) => {
			if (err) {
				var response="Something wrong when updating data!"
				
			}
		else{
			console.log('response',doc);
			response="Updated Sucessfully"
           
		}
		res.send({"response":response})	
		});
	})
})
router.post("/sendemail", function (req, res) {
	//  console.log(req.query.usermail)
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'nnoon.solutions@gmail.com',
			pass: 'surya84105'
		}
	});

	var mailOptions = {
		from: 'nnoon.solutions@gmail.com',
		//to: req.query.usermail,
		to: req.body.to,
		subject: req.body.subject,
		text: req.body.text,
		
	};

	transporter.sendMail(mailOptions, function (error, data) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + data.response);

			res.send({response:'mail sent sucessfully'})
		}
	});
})

router.post('/forgetpass', function (req, res, next) {
	//console.log('req.body');
	//console.log(req.body);
	var email = req.body.email;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = User.findOneAndUpdate({ email }).select('password passwordConf -_id role');
		query.exec(function (err, User) {
			console.log(User);
			if (!User) {
				res.send({ "Success": "This Email Is not regestered!" });
			} else {
				// res.send({"Success":"Success!"});
				if (req.body.password == req.body.passwordConf) {
					data.password = req.body.password;
					data.passwordConf = req.body.passwordConf;

					data.save(function (err, User) {
						if (err)
							console.log(err);
						else
							console.log('Success');
						res.send({ "Success": "Password changed!" });
					});
				} else {
					res.send({ "Success": "Password does not matched! Both Password should be same." });
				}
			}
		});
	});
});

// 	router.post('/questionupdate', function (req, res, next) {

// 		var adminname=req.body.adminname;
// 		mongoose.connect(url,function(err,db) {
// 		if (err) throw err;
// 		var query =	Upload.find({adminname}).select('adminname question option1 option2 option3 option4 answer language -_id role');
// 		query.exec(function(err, upload) {
// 			upload.question=req.body.question;
// 			upload.option1=req.body.option1;
// 			upload.option2=req.body.option2;
// 			upload.option3=req.body.option3;
// 			upload.option4=req.body.option4;
// 			upload.answer=req.body.answer;
// 			upload.language=req.body.language;
// 		});
// 		upload.save(function(err,Upload) {
// 				if (err) throw err;

// 				console.log('User successfully updated!');

// 		});
// 	});	
// });
router.post('/questionupdate', function (req, res) {

	var adminname = req.body.adminname;
	mongoose.connect(url, function (err, db) {
		if (err) throw err;
		var query = Upload.find({ adminname });
		console.log('find response', query)
		// query.exec(function(err, upload) {
		let data = {
			question: req.body.question,
		}
		console.log('data', data)
		query.findOneAndUpdate(data, function (err, upload) {
			if (err) throw err;
			console.log(upload);
		});
	});
});
// User.findById(1, function(err, user) {
// 	if (err) throw err;

// 	// change the users location
// 	user.location = 'uk';

// 	// save the user
// 	user.save(function(err) {
// 		if (err) throw err;

// 		console.log('User successfully updated!');
// 	});

// });

module.exports = router;