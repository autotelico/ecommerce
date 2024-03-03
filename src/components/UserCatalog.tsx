import React, { useState, useEffect, useRef, ReactElement } from 'react';
import CurrencyInput from 'react-currency-input-field';
import Modal from './Modal.tsx';

interface Item {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export function UserCatalog() {
  const initialItemList: Item[] = [
    {
      id: 0,
      name: 'Roses',
      price: '120',
      quantity: 0,
    },
    {
      id: 1,
      name: 'Chocolate',
      price: '86.99',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Anel de prata',
      price: '86.99',
      quantity: 0,
    },
    {
      id: 3,
      name: 'Luxury dress',
      price: '799,90',
      quantity: 0,
    },
  ];

  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [itemList, setItemList] = useState<Item[]>(initialItemList);
  const [showModal, setShowModal] = useState<Boolean>(false);

  function handleShow(): void {
    setShowModal(!showModal);
  }

  function handleItemQuantity(item) {
    // Sets the quantity of items the user wants to buy
  }

  function deleteItem(itemId: number) {
    setItemList(itemList.filter((item) => item.id !== itemId));
  }

  function addToCart(newItem: Item): void {
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    console.log('UserCatalog cartItems: ', cartItems);
  }

  return (
    <div id="catalog">
      {!!itemList.length && (
        <Item itemList={itemList} cartItems={cartItems} addToCart={addToCart} />
      )}
      <Cart cart={cartItems} />
    </div>
  );
}

function Item({ itemList, cartItems, addToCart }): ReactElement {
  console.log('Item cartItems (received from UserCatalog): ', cartItems);

  return (
    <div>
      {itemList.map((item) => {
        return (
          <div className="item" key={item.id}>
            <p>{item.name}</p>
            <p>Price: R$ {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export function Cart(props) {
  const [showCart, setShowCart] = useState<Boolean>(false);
  console.log('cart items: ', props.cart);

  return (
    <>
      <button id="cart-button" onClick={() => setShowCart(!showCart)}>
        Your Cart ({props.cart.length})
      </button>
      {showCart && (
        <div id="cart">
          <ul>
            {props.cart.map((cartItem) => (
              <li key={cartItem}>{cartItem.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
