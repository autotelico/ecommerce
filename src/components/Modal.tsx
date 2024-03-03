import React, { useState } from 'react';

interface CartItem {
  name: string;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    name: 'Banana',
    quantity: 3,
    image:
      'https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Grape',
    quantity: 2,
    image:
      'https://images.unsplash.com/photo-1552526881-5517a57b6d4a?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Modal() {
  const [cartItemList, setCartItemList] =
    useState<CartItem[]>(initialCartItems);

  return (
    <div className="darken-bg">
      <div id="cart-modal">
        <h3>Your Cart</h3>
        {cartItemList.map((cartItem) => {
          return <CartItem item={cartItem} />;
        })}
      </div>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="left-side">
        <img src={props.item.image} alt="" width="100" />
        <p className="cart-item-name">{props.item.name}</p>
        <p className="cart-item-quantity">Quantity: {props.quantity}</p>
      </div>
      <div className="right-side">
        <button>Buy</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
