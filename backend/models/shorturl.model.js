import mongoose from "mongoose";



const shortUrlSchema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true
    },
    short_url: {
        type: String,
              required: true,
              index: true
    },

clicks: {
    type: Number,
              required: true,
              default: 0
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",

}
})

const Shorturl = mongoose.model('Shorturl', shortUrlSchema);
export default Shorturl;