const mongoose = require("mongoose")

const CodeSchema = mongoose.Schema({
    content: {
        type:String,
        require: [true, "Please add the name"]
    },
    createdBy: {
        type:String,
        require: [true, "Please add the email address"],
        unique: true
    },
    permissions: {
        type: String,
        require: [true, "Please add the Password"]
    },
},
{
    timestamps:true,
});

module.exports = mongoose.model("Code", CodeSchema);