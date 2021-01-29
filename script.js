const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Todo = require("./models/todo");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connection to mongodb server
mongoose.connect("mongodb://localhost:27017/firstmongo");

app.use("/", express.static(path.resolve(__dirname, "assets")));

app.use(bodyParser.json());

// CREATE
app.post("/api/create", async (req, res) => {
    const record = req.body;
    const response = await Todo.create(record);
    res.json({ status: "ok" });
});

// READ
app.get("/api/get", async (req, res) => {
    const records = await Todo.find({});
    res.json(records);
});

// UPDATE
app.post("/api/modify", async (req, res) => {
    const { old: oldTitle, new: newTitle } = req.body;
    const response = await Todo.updateOne(
        {
            record: oldTitle,
        },
        {
            $set: {
                // ini supaya record laennya ga keganti
                record: newTitle,
            },
        }
    );
    console.log(response);
    res.json({ status: "ok" });
});

//DELETE
app.post("/api/delete", async (req, res) => {
    const { record } = req.body;
    const response = await Todo.deleteOne({ record });
    console.log(response);
    res.json({ status: "ok" });
});

app.listen(13371, () => {
    console.log("Server up");
});
