import  mongoose from "mongoose"
const Schema = mongoose.Schema


const conditionSchema = new Schema ({
    condition: String,
})


const jordanSchema = new Schema ({
    name: String,
    worn: Boolean,
    picture: String
    
})

const Jordan = mongoose.model('Jordan', jordanSchema)

export {
    Jordan
}