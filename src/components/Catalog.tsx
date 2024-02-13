import React, { useState, useEffect, useRef } from "react";
import CurrencyInput from "react-currency-input-field";

interface Item {
  id: number;
  name: string;
  price: string;
  amount: string;
}

export default function Catalog() {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [showItemMenu, setShowItemMenu] = useState(false);
  const idRef = useRef(0);

  function handleShow() {
    setShowItemMenu(!showItemMenu);
  }

  function addItem() {
    const itemName = document.querySelector<HTMLInputElement>("#item-name");
    const itemPrice = document.querySelector<HTMLInputElement>("#item-price");
    const itemAmount = document.querySelector<HTMLInputElement>("#item-amount");

    const item: Item = {
      id: idRef.current,
      name: itemName?.value || "",
      price: itemPrice?.value || "",
      amount: itemAmount?.value || "",
    };

    setItemList((prevItemList) => [...prevItemList, item]);
    idRef.current++;
    handleShow();
    console.log(itemList);
  }

  function deleteItem(itemId: number) {
    setItemList(itemList.filter(item => item.id !== itemId))
  }

  return (
    <div id="catalog">
      <ItemMenu
        showItemMenu={showItemMenu}
        handleShow={handleShow}
        addItem={addItem}
      />
      {!!itemList.length && <Item itemList={itemList} deleteItem={deleteItem}/>}
    </div>
  );
}

function Item({ itemList, deleteItem }) {
  return (
    <>
      {itemList.map((item: Item) => {
        return (
          <div key={item.id} className="item">
            <p>{item.name}</p>
            <p>
              Price:{" "}
              {item.price.includes(",") ? item.price : item.price + ",00"}
            </p>
            <p>Available amount: {item.amount}</p>
            <button onClick={() => deleteItem(item.id)}>Delete item</button>
          </div>
        );
      })}
    </>
  );
}

function ItemMenu({ showItemMenu, handleShow, addItem }) {
  return (
    <>
      {showItemMenu ? (
        <div id="item-menu">
          <input type="text" id="item-name" placeholder="Item name" />
          <CurrencyInput
            id="item-price"
            placeholder="Price"
            prefix="R$ "
            decimalsLimit={2}
            maxLength={6}
          />
          <input type="text" id="item-amount" placeholder="Available amount" />
          <button onClick={addItem}>Add</button>
          <button onClick={handleShow}>Back</button>
        </div>
      ) : (
        <button onClick={handleShow}>Add Item</button>
      )}
    </>
  );
}
