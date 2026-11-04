import React, { useState } from 'react';
import { Product } from '../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="modal-image">
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className="modal-details">
          <h2>{product.productName.toUpperCase()}</h2>
          <div className="modal-price">{formattedPrice}</div>
          <p className="modal-description">{product.descriptionShort}</p>
          <a href="#" className="modal-link" onClick={(e) => e.preventDefault()}>
            Veja mais detalhes do produto &gt;
          </a>
          
          <div className="modal-actions">
            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="btn-buy">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};