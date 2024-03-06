import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

  useEffect(() => {
    (async function fetchBlogPost() {
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
    })();
  }, []);

  return pending ? (
    <div>Loading....</div>
  ) : (
    <section className="flex gap-10 justify-center">
      {blogList &&
        blogList.length &&
        blogList.map((blog) => (
          <div
            key={blog._id}
            className="border border-yellow-300 w-80 text-center p-3"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        ))}
    </section>
  );
}
