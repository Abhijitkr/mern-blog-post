import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddBlog from "./pages/AddBlog";
import Home from "./pages/Home";

function App() {
  return (
    <main className="container mx-auto p-5">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </main>
  );
}

export default App;
