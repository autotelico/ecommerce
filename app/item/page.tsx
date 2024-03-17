import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <>
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
        <img id="main-icon" src="" alt="" />
        <form action="">
          <input
            type="text"
            id="search-bar"
            placeholder="O que você está procurando?"
          />
          <button id='search-button'>Buscar</button>
        </form>
        <div id="login-div">login</div>
        <img id="cart" src="" alt="" />
      </div>
    </>
  );
}
