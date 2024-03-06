import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);

  // useEffect(() => {
  //   (async function fetchBlogPost() {
  //     const response = await fetch("http://localhost:8000/api/blogs");
  //     const data = await response.json();
  //     if (data && data.blogs && data.blogs.length) {
  //       setBlogList(data.blogs);
  //     }
  //   })();
  // }, []);

  return <section>Home</section>;
}
