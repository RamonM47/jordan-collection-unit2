import  mongoose from "mongoose"
const Schema = mongoose.Schema


const jordanSchema = new Schema ({
    name: String,
    worn: Boolean,
    picture: String,
    condition: String,
    content:String,
    author: {type: Schema.Types.ObjectId, ref: "Profile"}
    
})

const Jordan = mongoose.model('Jordan', jordanSchema)

export {
    Jordan
}