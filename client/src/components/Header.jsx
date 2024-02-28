import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold cursor-pointer">
          <Link to="/">MERN Blog</Link>
        </h1>
        <ul className="flex items-center gap-20 text-xl font-medium cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-blog">Add Blog</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
