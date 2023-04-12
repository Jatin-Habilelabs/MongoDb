const express = require("express");
const app = express();
const Book = require("../model/book");

const response = {};
const getData = app.get("/book", async (req, res) => {
  try {
    const getData = await Book.find();

    response.status = 200;
    response.message = "Succesully get all data";
    response.data = {
      getData,
    };
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

const deleteData = app.delete("/book", async (req, res) => {
  try {
    await Book.findOneAndDelete({ bookName: req.body.bookName });
    response.status = 200;
    response.message = "Successflly  Item deleted. ";
    res.send(response);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

const putData = app.put("/book", async (req, res) => {
  try {
    await Book.findOneAndUpdate(
      { bookName: req.body.bookName },
      {
        bookDate: req.body.bookDate,
        bookVersion: req.body.bookVersion,
      }
    );
    res.send("Item Updated!");
  } catch (error) {
    console.log(error);
  }
});

const postData = app.post("/book", async (req, res) => {
  try {
    const { bookName, bookAuthor, bookPublication, bookDate, bookVersion } =
      req.body;

    if (
      !bookName ||
      !bookAuthor ||
      !bookPublication ||
      !bookDate ||
      !bookVersion
    ) {
      return res.json({ error: "invalid input" });
    }

    const checkIfBookExist = await Book.findOne({ bookName, bookAuthor });
    if (checkIfBookExist) {
      response.status = 409;
      response.message = "Book already exist";
      response.data = {
        msg: "WTF",
      };
      res.send(response);
    } else {
      const book = new Book({
        bookName,
        bookAuthor,
        bookPublication,
        bookDate,
        bookVersion,
      });
      const saveBookData = await book.save();
      response.status = 200;
      response.message = "Sucessfully added book";
      response.data = {
        saveBookData,
      };
      res.send(response);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getData,
  postData,
  putData,
  deleteData,
};
