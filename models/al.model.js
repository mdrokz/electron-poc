var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var userSchema = new Schema({
    altEmail: {
        type: String
    },
    Number: {
        type: Number
    }
});


userSchema.plugin(Umongo);


module.exports = mongoose.model('ainfo',userSchema);
