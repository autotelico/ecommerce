import { useState } from "react";
import Header from "./Header";
import Catalog from "./Catalog";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Catalog />
    </>
  );
}

export default App;
