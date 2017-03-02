var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Antyp = require('./models/antyps');
An = require('./models/ans');

//Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/project');
var db = mongoose.connect;

app.get('/',function(req,res){
    res.send('please use  /api/ans or /api/antyps');
});

app.get('/api/antyps',function(req,res){
    Antyp.getAntyps(function(err,antyps){
         if(err){
         	   throw err;
         }
         res.json(antyps);

    });
});

app.post('/api/antyps',function(req,res){
	var antyp = req.body;
    Antyp.addAntyp(antyp,function(err,antyp){
         if(err){
         	   throw err;
         }
         res.json(antyp);

    });
});

app.put('/api/antyps/:_id',function(req,res){
	var id = req.params._id;
	var antyps = req.body;
    Antyp.updateAntyp(id,antyp,{},function(err,antyp){
         if(err){
         	   throw err;
         }
         res.json(antyp);

    });
});

app.delete('/api/antyps/:_id',function(req,res){
	var id = req.params._id;
    Antyps.removeAntyps(id, function(err,antyps){
         if(err){
         	   throw err;
         }
         res.json(antyps);
      });
});


app.get('/api/ans',function(req,res){
    An.getAns(function(err,ans){
         if(err){
         	   throw err;
         }
         res.json(ans);

    });
});


app.get('/api/ans/:_id',function(req,res){
    An.getAnsById(req.params.id,function(err,an){
         if(err){
         	   throw err;
         }
         res.json(ans);

    });
});

app.post('/api/ans',function(req,res){
	var an = req.body;
    An.addAn(an,function(err,an){
         if(err){
         	   throw err;
         }
         res.json(an);

    });
});

app.put('/api/ans/:_id',function(req,res){
	var id = req.params._id;
	var ans = req.body;
    An.updateAn(id,an,{},function(err,an){
         if(err){
         	   throw err;
         }
         res.json(an);

    });
});

app.delete('/api/ans/:_id',function(req,res){
	var id = req.params._id;
    An.removeAn(id, function(err,an){
         if(err){
         	   throw err;
         }
         res.json(an);
      });
});

app.listen(27017);
console.log('Running on port 27017...');