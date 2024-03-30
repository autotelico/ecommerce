'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login(): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    window.addEventListener('resize', () => {
      const loginSpan1: HTMLSpanElement =
        document.querySelector('#login-span1')!;
      const loginSpan2: HTMLSpanElement =
        document.querySelector('#login-span2')!;
      const br: HTMLBRElement = document.querySelector('#login-div-br')!;
      if (window.innerWidth <= 768) {
        br.style.display = 'none';
        loginSpan1.style.display = 'none';
        loginSpan2.textContent = 'Faça Login';
      } else {
        br.style.display = 'inline';
        loginSpan1.style.display = 'inline';
        loginSpan2.textContent = 'Faça login ou cadastre-se';
      }
    });
  }

  return (
    <div id="login-div">
      <img src="/person.svg" alt="" id="login-icon" />
      <div id="login-spans" onClick={() => router.push('/login')}>
        <span id="login-span1">Bem-vindo,</span>
        <br id="login-div-br" />
        <span id="login-span2">
          {isClient && window.innerWidth > 480
            ? 'Faça login ou cadastre-se'
            : 'Faça login'}
        </span>
      </div>
    </div>
  );
}
