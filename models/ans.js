
var mongoose = require('mongoose');

//Genre Schema
var anSchema = mongoose.Schema({
       typebien:{
       	    type:String,
            required:true
       },
       description:{
       	     type:String
       },
       prix:{
            type:String
       },
        photo:{
            type:String
       },
       create_date:{
            type:Date,
            default:Date.now
       }
});
var An = module.exports = mongoose.model('An',anSchema);

// Get Ans
module.exports.getAns = function(callback,limit){
    An.find(callback).limit(limit);
  }

  // Get An
module.exports.getAnById = function(id,callback){
    An.findById(id,callback);
  }

  //Add An
module.exports.addAn = function(an,callback){
    An.create(an,callback);
  }

   //Update Antyp
module.exports.updateAn = function(id,an,options,callback){
    var query = {_id: id};
    var update = {
        typebien:an.typebien,
     description:an.description,
            prix:an.prix,
           photo:an.photo
      }
    An.findOneAndUpdate(query,update,options,callback);
  }

    //Delete An
module.exports.removeAn = function(id ,callback){
     var query = {_id: id};
    An.remove(query,callback);
  }
