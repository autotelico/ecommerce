import React, { useState, useEffect, useRef } from 'react';
import CurrencyInput from 'react-currency-input-field';
import Modal from '../Modal.tsx';

interface Item {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export default function AdminCatalog() {
  const [itemList, setItemList] = useState<Item[]>([]);
  const [showItemMenu, setShowItemMenu] = useState<Boolean>(false);
  const [showModal, setShowModal] = useState<Boolean>(false);
  const idRef = useRef(0);

  function handleShow(): void {
    setShowItemMenu(!showItemMenu);
  }

  function addItem(): void {
    const itemName = document.querySelector<HTMLInputElement>('#item-name');
    const itemPrice = document.querySelector<HTMLInputElement>('#item-price');

    const item: Item = {
      id: idRef.current,
      name: itemName?.value || '',
      price: itemPrice?.value || '',
      quantity: 0,
    };

    setItemList((prevItemList) => [...prevItemList, item]);
    idRef.current++;
    handleShow();
    console.log(itemList);
  }

  function handleItemQuantity(item) {
    // Sets the quantity of items the user wants to buy
  }

  function deleteItem(itemId: number) {
    setItemList(itemList.filter((item) => item.id !== itemId));
  }

  return (
    <div id="catalog">
      <ItemMenu
        showItemMenu={showItemMenu}
        handleShow={handleShow}
        addItem={addItem}
      />
      {!!itemList.length && (
        <Item
          itemList={itemList}
          setItemList={setItemList}
          handleItemQuantity={handleItemQuantity}
          deleteItem={deleteItem}
        />
      )}
    </div>
  );
}

function Item({ itemList, setItemList, handleItemQuantity, deleteItem }) {

  function handleIncrease(newItem): void {
    setItemList(prevItemList => {
      const filteredItemList = prevItemList.filter(item => item !== newItem)
      return [...filteredItemList, newItem]
    })
  }

  function handleDecrease(newItem): void {
    // if () {
    // }
  }

  function addItemToCart(item): void {
    
  }
  return (
    <>
      {itemList.map((item: Item) => {
        return (
          <div key={item.id} className="item">
            <p>{item.name}</p>
            <p>
              Price:{' '}
              {item.price.includes(',') ? item.price : item.price + ',00'}
            </p>
            <div className="quantity-adjuster">
              <button onClick={() => handleDecrease({...item, quantity: item.quantity + 1})}>-</button>
              <p>Amount: {item.quantity}</p>
              <button onClick={() => handleIncrease({...item, quantity: item.quantity + 1})}>+</button>
            </div>
            <button onClick={() => addItemToCart(item.id)}>Add to Cart</button>
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
