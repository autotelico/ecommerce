import { useState } from "react";
import Catalog from "./Catalog";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Catalog />
    </>
  );
}

export default App;
