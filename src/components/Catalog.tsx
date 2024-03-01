import React, { useState, useEffect, useRef } from "react";
import CurrencyInput from "react-currency-input-field";

interface Item {
  id: number;
  name: string;
  price: string;
  quantity: number;
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

    const item: Item = {
      id: idRef.current,
      name: itemName?.value || "",
      price: itemPrice?.value || "",
      quantity: 0,
    };

    setItemList((prevItemList) => [...prevItemList, item]);
    idRef.current++;
    handleShow();
    console.log(itemList);
  }

  function updateItemQuantity(item) {
    // Sets the quantity of items the user wants to buy
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
      {!!itemList.length && <Item itemList={itemList} updateItemQuantity={updateItemQuantity} deleteItem={deleteItem}/>}
    </div>
  );
}

function Item({ itemList, updateItemQuantity, deleteItem }) {

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
            <div className="quantity-adjuster">
              <button onClick={() => updateItemQuantity(item)}>-</button>
              <p>Amount: {item.quantity > 0 ? item.quantity : 0}</p>
              <button onClick={() => updateItemQuantity(item)}>+</button>
            </div>
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
          <button onClick={addItem}>Add</button>
          <button onClick={handleShow}>Back</button>
        </div>
      ) : (
        <button onClick={handleShow}>Add Item</button>
      )}
    </>
  );
}
