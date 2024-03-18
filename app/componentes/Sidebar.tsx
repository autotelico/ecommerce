'use client';

export default function Sidebar(): JSX.Element {
  const handleSidebarClick = (): void => {
    const sidebar: HTMLDivElement = document.querySelector('#sidebar')!;
    sidebar!.style.right === '-200px'
      ? (sidebar!.style.right = '0')
      : (sidebar!.style.right = '-200px');
  };

  return (
    <>
      <button id="sidebar-button" onClick={handleSidebarClick}>
        <img src="/sidebar-button.svg" alt="" />
      </button>
      <div id="sidebar" style={{right: '-200px'}}>
        <button id="close-sidebar-button" onClick={handleSidebarClick}>
          X
        </button>
        <div id="sidebar-title">
          <h2>Your Cart</h2>
        </div>
      </div>
    </>
  );
}
