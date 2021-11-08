import mongoose from 'mongoose'
const Schema = mongoose.Schema


const reviewsSchema = new Schema({
  review: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const jordanSchema = new Schema ({
  name: String,
  shoe_condition: {type: String, enum: ['new_with_defects', 'new_no_defects', 'used']},
  reviews: [reviewsSchema]
})



const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  jordans: [jordanSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}