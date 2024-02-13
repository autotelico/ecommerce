import React, { useState, useEffect, useRef } from "react";

interface Item {
  name: string;
  price: number;
  amount: number;
}

export default function Catalog() {
  const [itemList, setItemList] = useState([]);
  const [showItemMenu, setShowItemMenu] = useState(false);

  function handleShow() {
    setShowItemMenu(!showItemMenu);
  }

  function addItem() {
    const itemName = document.querySelector<HTMLInputElement>("#item-name");
    const itemPrice = document.querySelector<HTMLInputElement>("#item-price");
    const itemAmount = document.querySelector<HTMLInputElement>("#item-amount");

    const item = {
      name: itemName?.value,
      price: itemPrice?.value,
      amount: itemAmount?.value,
    };

    setItemList((prevItemList: Item[]) => [...prevItemList, item]);
    handleShow();
    console.log(itemList);
  }

  return (
    <div id="catalog">
      <ItemMenu
        showItemMenu={showItemMenu}
        handleShow={handleShow}
        addItem={addItem}
      />
      {!!itemList.length && <Item itemList={itemList} />}
      {/* temporary */}
      <Item itemList={itemList} />
    </div>
  );
}

function Item({ itemList }) {
  return (
    <>
      {itemList.map((item: Item) => {
        return (
          <div className="item">
            <p>{item.name}a</p>
            <p>{item.price}</p>
            <p>{item.amount}</p>
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
          <input type="text" id="item-name" />
          <input type="text" id="item-price" />
          <input type="text" id="item-amount" />
          <button onClick={addItem}>Add</button>
          <button onClick={handleShow}>Back</button>
        </div>
      ) : (
        <button onClick={handleShow}>Add Item</button>
      )}
    </>
  );
}
