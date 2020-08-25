const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    room_code: String,
    room_member: Array,
});

module.exports = mongoose.model("room", RoomSchema);