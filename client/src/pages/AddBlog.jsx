export default function AddBlog() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Add Blog</h1>
      <div className="flex flex-col p-10 w-[800px] gap-5 mx-auto">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter blog title"
          className="p-2 border border-gray-300 outline-gray-400"
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter blog description"
          className="p-2 border border-gray-300 outline-gray-400"
        ></textarea>
        <button
          type="submit"
          className="p-2 border border-gray-300 outline-gray-400 transition-transform duration-200 transform hover:scale-105 active:scale-95"
        >
          Add the Blog
        </button>
      </div>
    </section>
  );
}
