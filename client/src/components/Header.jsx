export default function Header() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold cursor-pointer">MERN Blog</h1>
        <ul className="flex items-center gap-20 text-xl font-medium cursor-pointer">
          <li>Home</li>
          <li>Add Blog</li>
        </ul>
      </div>
    </section>
  );
}
