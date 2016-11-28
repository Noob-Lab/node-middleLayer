var mongoose  = require('mongoose');

var Schema    = mongoose.Schema;


var UserSchema = new Schema({
  username: { type: String},
  password: { type: String}
});

 



UserSchema.index({_id: 1}, {unique: true});
 

mongoose.model('User', UserSchema);
