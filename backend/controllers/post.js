import httpStatus from "http-status";
import Post from "../model/Post.js";

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.status(httpStatus.CREATED).json(post);
  } catch (error) {
    next(error);
  }
};

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(httpStatus.OK).json(posts);
  } catch (error) {
    next(error);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.json({message: 'No such post'});
    } else {
      res.status(httpStatus.OK).json(post);
    }
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if(!post) {
        return res.json({message: 'No such post'});
    }
    res.status(httpStatus.OK).json(post);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post) {
            return res.json({message: 'No such post'});
        }
        res.status(httpStatus.OK).json(post);
    } catch (error) {
        next(error);
    }
};
