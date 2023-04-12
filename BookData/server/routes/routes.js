const express = require("express");
const app = express();
const Book = require("../model/book");
const bookController = require("../controller/bookData");

const { getData, putData, postData, deleteData } = bookController;

app.get("/book", getData);
app.delete("/book", deleteData);

app.put("/book", putData);

app.post("/book", postData);

module.exports = app;
