'use client';
import { useRouter } from 'next/navigation';

interface Item {
  id: number;
  nome: string;
  preco: number;
}

export default function Sidebar({
  cartItems,
  handleRemove,
}: {
  cartItems: Item[];
  handleRemove: any;
}): JSX.Element {
  const router = useRouter()

  const handleSidebarClick = (): void => {
    const sidebar: HTMLDivElement = document.querySelector('#sidebar')!;
    sidebar!.style.right === '0'
      ? (sidebar!.style.right = '-200px')
      : (sidebar!.style.right = '-0');
    sidebar!.style.display === 'none'
      ? (sidebar!.style.display = 'inline-block')
      : (sidebar!.style.display = 'none');
  };

  const sumTotal = (): number | string => {
    if (cartItems.length) {
      return cartItems.reduce((acc, curr) => acc + curr.preco, 0);
    } else {
      return 'No cart items available';
    }
  };

  return (
    <>
      <div id="cart-div" onClick={handleSidebarClick}>
        {/* Valor dos itens em carrinho */}
        <div id="itens-em-carrinho">{cartItems.length}</div>
        <img id="cart" src="/cart.svg" alt="" />
      </div>
      <button id="sidebar-close-button" onClick={handleSidebarClick}>
        <img src="/sidebar-button.svg" alt="" />
      </button>
      <div id="sidebar" style={{ right: '0', display: 'none' }}>
        <button id="close-sidebar-button" onClick={handleSidebarClick}>
          X
        </button>
        <div id="sidebar-title">
          <h2>Seu Carrinho</h2>
        </div>
        {cartItems.map((cartItem: Item) => {
          return (
            <div className="cart-item" key={cartItem.id}>
              <button
                className="remove-item-button"
                onClick={() => handleRemove(cartItem)}
              >
                X
              </button>
              <p>{cartItem.nome}</p>
              <p>R$ {cartItem.preco}</p>
            </div>
          );
        })}
        {!!cartItems.length && (
          <div>
            <p>Seu Total: R$ {sumTotal()}</p>
            <button onClick={() => router.push('/checkout')}>Finalizar Compra</button>
          </div>
        )}
      </div>
    </>
  );
}
