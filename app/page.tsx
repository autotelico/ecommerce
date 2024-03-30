'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import Login from './componentes/Login';
import Sidebar from './componentes/Sidebar';
import Item from './componentes/Item';

interface Item {
  id: number;
  nome: string;
  preco: number;
}

export default function Home(): JSX.Element {
  const [cart, setCart] = useState<Item[]>([]);

  const itens = [
    {
      id: 1,
      nome: 'Batata',
      preco: 32,
    },
    {
      id: 2,
      nome: 'Feijão',
      preco: 5,
    },
    {
      id: 3,
      nome: 'Cebola',
      preco: 4,
    },
    {
      id: 4,
      nome: 'Cenoura',
      preco: 7,
    },
    {
      id: 5,
      nome: 'Tomate',
      preco: 8,
    },
    {
      id: 6,
      nome: 'Arroz',
      preco: 5,
    },
  ];

  const addItemToCart = (item: Item) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
      console.log('Added. Prev cart:', cart);
    }
  };

  const removeItemFromCart = (item: Item) => {
    setCart(cart.filter((cartItem: Item) => cartItem.id !== item.id));
    console.log('Removed. Current cart is:', cart);
  };

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     document.querySelector<HTMLInputElement>('input')!.value = String(
  //      window.innerWidth
  //    );
  //  });
  // }, []);

  return (
    <main>
      <header>
        <div className="header-welcome">
          {/* Change href */}
          <div className="header-left">
            <Link href="/">Nossas Lojas</Link>
            <p> | </p>
            {/* Change href */}
            <Link href="/">Trabalhe Conosco</Link>
          </div>
          <div className="header-right">
            {/* criar menu interativo que seleciona região */}
            <p>Você está comprando na loja de São Paulo.</p>
          </div>
        </div>
        <div className="header-content">
          <Image
            id="main-icon"
            src="https://media.istockphoto.com/id/1226029166/photo/fruts-vegetables-at-market-india.jpg?s=612x612&w=0&k=20&c=2zOAPF32PTDonIvCUA1PyBhXQ1X0UcKDmQKtknz_sAA="
            alt=""
          />
          <form action="">
            <input
              type="text"
              id="search-bar"
              placeholder="O que você está procurando?"
            />
            <button id="search-button">Buscar</button>
          </form>
          <Suspense fallback={<p>Carregando...</p>}>
            <Login />
          </Suspense>

          <Sidebar cartItems={cart} handleRemove={removeItemFromCart} />
        </div>
        <div className="header-bottom">
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
          <div>f</div>
          <div>g</div>
          <div>h</div>
          <div>i</div>
        </div>
      </header>
      <div id="banner">
        <img
          src="https://t3.ftcdn.net/jpg/03/16/91/28/360_F_316912806_RCeHVmUx5LuBMi7MKYTY5arkE4I0DcpU.jpg"
          alt=""
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2 id="titulo-catalogo">Mais comprados de hoje</h2>
        <div id="catalogo">
          {itens.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleClick={() => addItemToCart(item)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
