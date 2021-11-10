import  mongoose from "mongoose"
const Schema = mongoose.Schema

const jordanSchema = new Schema ({
    name: String,
    worn: Boolean,
    creased: Boolean
})

const Jordan = mongoose.model('Jordan', jordanSchema)

export {
    Jordan
}