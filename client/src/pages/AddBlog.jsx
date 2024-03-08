import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function AddBlog() {
  const { formData, setFormData, isEdit, setIsEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = isEdit
      ? await fetch(
          `http://localhost:8000/api/blogs/update/${location.state.getBlog._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        )
      : await fetch("http://localhost:8000/api/blogs/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
    if (response.ok) {
      setIsEdit(false);
      setFormData({
        title: "",
        description: "",
      });
    }
    navigate("/");
  }

  useEffect(() => {
    if (location.state) {
      setIsEdit(true);
      setFormData({
        title: location.state.getBlog.title,
        description: location.state.getBlog.description,
      });
    }
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-semibold text-center">Add Blog</h1>
      <div className="flex flex-col p-10 w-[800px] gap-5 mx-auto">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter blog title"
          className="p-2 border border-gray-300 outline-gray-400"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter blog description"
          className="p-2 border border-gray-300 outline-gray-400"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          value={formData.description}
        ></textarea>
        <button
          // type="submit"
          className="p-2 border border-gray-300 outline-gray-400 transition-transform duration-200 transform hover:scale-105 active:scale-95"
          onClick={(e) => handleSubmit(e)}
        >
          Add the Blog
        </button>
      </div>
    </section>
  );
}
