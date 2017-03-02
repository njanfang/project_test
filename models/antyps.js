
var mongoose = require('mongoose');

//antyps Schema
var antypSchema = mongoose.Schema({
       typebien:{
       	    type:String,
       	    required:true
       },
       create_date:{
       	     type:Date,
       	     default:Date.now
       }
});

var Antyp = module.exports = mongoose.model('Antyp',antypSchema);

// Get antyps
module.exports.getAntyps = function(callback,limit){
    Antyp.find(callback).limit(limit);
  }

//Add Antyp
module.exports.addAntyp = function(antyp ,callback){
    Antyp.create(antyp,callback);
  }

  //Update Antyp
module.exports.updateAntyp = function(id,antyp,options,callback){
    var query = {_id: id};
    var update = {
        typebien:antyp.typebien
    }
    Antyp.findOneAndUpdate(query,update,options,callback);
  }

  //Delete Antyp
module.exports.removeAntyp = function(id,callback){
     var query = {_id: id};
    Antyp.remove(query,callback);
  }
