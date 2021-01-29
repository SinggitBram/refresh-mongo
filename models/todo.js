const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
    {
        record: { type: String, required: true },
        date: { type: Number, default: Date.now() },
    },
    // { collection: "my-todo" } // ini kl mau bikin collectionnya diganti namanya bukan default + 's'
);

const model = mongoose.model("TodoModel", TodoSchema);

module.exports = model;
