import httpStatus from "http-status";
import Book from "../model/Book.js";

export const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(httpStatus.CREATED).json(book);
  } catch (error) {
    next(error);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const book = await Book.find();
    res.status(httpStatus.OK).json(book);
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.json({message: 'No such book'});
    } else {
      res.status(httpStatus.OK).json(book);
    }
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if(!book) {
        return res.json({message: 'No such book'});
    }
    res.status(httpStatus.OK).json(book);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if(!book) {
            return res.json({message: 'No such book'});
        }
        res.status(httpStatus.OK).json(book);
    } catch (error) {
        next(error);
    }
};
