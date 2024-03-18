import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Login from './componentes/Login';
import Sidebar from './componentes/Sidebar';

export default function Home(): JSX.Element {
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
          <img id="main-icon" src="/main-logo.jpg" alt="" />
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
          <div id="cart-div">
            {/* Valor dos itens em carrinho */}
            <div id="itens-em-carrinho">0</div>
            <img id="cart" src="/cart.svg" alt="" />
          </div>
          <Sidebar />
        </div>
      </header>
    </main>
  );
}
