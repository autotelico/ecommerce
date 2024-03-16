import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <header>
      {/* Change href */}
      <div className="header-left">
        <Link href='/'>Nossas Lojas</Link>
        <p> | </p>
        {/* Change href */}
        <Link href='/'>Trabalhe Conosco</Link>
      </div>
      <div className="header-right">
        {/* criar menu interativo que seleciona região */}
        <p>Você está comprando na loja de São Paulo.</p>
      </div>
    </header>
    </>
  );
}
