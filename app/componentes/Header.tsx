'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header(): JSX.Element {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [smallWindow, setSmallWindow] = useState<boolean>(false);
  const [largeWindow, setLargeWindow] = useState<boolean>(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && window.innerWidth > 768 && (
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
      )}
    </>
  );
}
