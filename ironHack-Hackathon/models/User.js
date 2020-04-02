const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    googleID: String,
    image: String,
    role: {
        type: String,
        enum: ["ADMIN", "GUEST"],
        default: "GUEST"
    },
    favourite_songs: {
        type: Array
    }
}, {
    timestamps: true
});

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);