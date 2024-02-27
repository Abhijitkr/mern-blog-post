import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const {test} = useContext(GlobalContext);
  return <main className="text-3xl text-green-500">{test}</main>;
}

export default App;
