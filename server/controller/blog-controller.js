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
