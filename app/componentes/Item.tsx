'use client';
import './componentStyles.css';

export default function Item({
  item,
  handleClick,
}: {
  item: { id: number; nome: string; preco: number };
  handleClick: any;
}) {
  return (
    <div className="item" onClick={handleClick}>
      <p>{item.nome}</p>
      <p>R$ {item.preco}</p>
    </div>
  );
}
