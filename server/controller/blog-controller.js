const mongoose = require("mongoose");
const Blog = require("../model/Blog");

const fetchBlogList = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!blogList) {
    return res.status(404).json({ message: "No Blogs found!" });
  }
  return res.status(200).json({ blogList });
};

const addBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();
  const newlyCreatedBlog = new Blog({ title, description, date: currentDate });

  try {
    await newlyCreatedBlog.save();
  } catch (error) {
    console.log(error);
  }
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlyCreatedBlog.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.send(500).json({ message: error });
  }
  return res.status(200).json({ newlyCreatedBlog });
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found!" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Unable to delete! Please try again" });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  let updatedBlog;

  try {
    updatedBlog = await Blog.findByIdAndUpdate(id, { title, description });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while updating! Please try again",
    });
  }
  if (!updatedBlog) {
    return res.status(500).json({ message: "Unable to delete Blog!" });
  }

  return res.status(200).json({ message: "Blog Updated Successfully." });
};

module.exports = { fetchBlogList, deleteBlog, updateBlog, addBlog };
