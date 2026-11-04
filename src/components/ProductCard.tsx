import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  const oldPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price * 1.2);

  const installmentPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price / 2);

  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.photo} alt={product.productName} />
      <p className="product-card__description">{product.productName}</p>
      <span className="old-price">{oldPrice}</span>
      <div className="price">{formattedPrice}</div>
      <div className="installments">ou 2x de {installmentPrice} sem juros</div>
      <div className="shipping">Frete grátis</div>
      <button>COMPRAR</button>
    </div>
  );
};