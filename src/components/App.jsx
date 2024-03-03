import { useState } from "react";
import Header from "./Header";
import { UserCatalog, Cart } from "./UserCatalog";
import "../styles/App.css";
import "../styles/cart.css";
import "../styles/modal.css";

function App() {

  return (
    <>
      <Header />
      <UserCatalog />
    </>
  );
}

export default App;
