const express = require("express");
const {
  fetchBlogList,
  addBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/blog-controller");
const blogRouter = express.Router();

blogRouter.get("/", fetchBlogList);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

module.exports = blogRouter;
