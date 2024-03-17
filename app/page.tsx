import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
      </header>
      <div className="header-content">
        <img id="main-icon" src="/main-logo.jpg" alt="" />
        <form action="">
          <input
            type="text"
            id="search-bar"
            placeholder="O que você está procurando?"
          />
          <button id='search-button'>Buscar</button>
        </form>
        <div id="login-div">
          <img src="/person.svg" alt="" id="login-icon" />
          <div id="login-spans">
            <span>Bem-vindo,</span><br />
            <span>Faça login ou cadastre-se</span>
          </div>
        </div>
        <div id="cart-div">
          {/* Valor dos itens em carrinho */}
          <div id='itens-em-carrinho'>0</div>
          <img id="cart" src="/cart.svg" alt="" />
        </div>
      </div>
    </main>
  );
}
