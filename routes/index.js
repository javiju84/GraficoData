var express = require ("express");
var router = express.Router();
var request =  require ("request");
var mongoose = require ("mongoose");
var ibex35_santander = null;


/* GET home page. */


mongoose.connect("mongodb://localhost/STOCKMARKET");
var db = mongoose.connection;
db.on("error", console.error.bind(console,"Connection error:"));
db.once('open',function(callback){

	var SAN_schema = mongoose.Schema({
	fecha: String,
	abierto: Number,
	alto: Number,
	bajo: Number,
	cierre: Number,
	volumen:Number,	
	ajuste_cierre:Number,

	});
	ibex35_santander = mongoose.model('ibex35_santander', SAN_schema);



router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/STOCKMARKET', function (req, res) {
	ibex35_santander.find(function(err, records){
		aData = records;
		res.send(aData);
		//console.log(aData)
	});
});
	
});
module.exports = router;
