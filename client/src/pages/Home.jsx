import { useContext, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TiPencil } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function handleDelete(getDeleteId) {
    const response = await fetch(
      `http://localhost:8000/api/blogs/delete/${getDeleteId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
      fetchBlogPost();
    } else {
      console.log(data.message);
    }
  }

  function handleEdit(getBlog) {
    navigate("/add-blog", { state: { getBlog } });
  }

  async function fetchBlogPost() {
    setPending(true);
    try {
      const response = await fetch("http://localhost:8000/api/blogs");
      const data = await response.json();
      if (data && data.blogList) {
        setBlogList(data.blogList);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchBlogPost();
  }, []);

  return pending ? (
    <div className="text-center font-medium text-2xl">Loading....</div>
  ) : (
    <section className="flex gap-10 justify-center flex-wrap">
      {blogList && blogList.length ? (
        blogList.map((blog) => (
          <div
            key={blog._id}
            className="border border-yellow-300 w-80 justify-around p-3 flex gap-3"
          >
            <div>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <TiPencil
                size="25"
                className="hover:scale-125 cursor-pointer"
                onClick={(e) => handleEdit(blog)}
              />
              <FaRegTrashAlt
                size="20"
                className="hover:scale-125 cursor-pointer"
                onClick={(e) => handleDelete(blog._id)}
              />
            </div>
          </div>
        ))
      ) : (
        <div className="text-2xl font-medium">No Blog Found!</div>
      )}
    </section>
  );
}
