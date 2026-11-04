import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__topbar">
        <div className="container topbar-content">
          <span>&#128737; Compra <strong>100% segura</strong></span>
          <span>&#128666; <strong>Frete grátis</strong> acima de R$ 200</span>
          <span>&#128179; <strong>Parcele</strong> suas compras</span>
        </div>
      </div>
      <div className="header__main container">
        <div className="header__logo">
          <span className="logo-badge">ec</span>
          <span className="logo-text">onverse</span>
        </div>
        <div className="header__search">
          <input type="text" placeholder="O que você está procurando?" />
          <button type="button">&#128065;</button>
        </div>
        <div className="header__icons">
          <span>&#128230;</span>
          <span>&#9825;</span>
          <span>&#128100;</span>
          <span>&#128722;</span>
        </div>
      </div>
      <nav className="header__nav">
        <div className="container">
          <ul>
            <li>TODAS CATEGORIAS</li>
            <li>SUPERMERCADO</li>
            <li>LIVROS</li>
            <li>MODA</li>
            <li>LANÇAMENTOS</li>
            <li className="active">OFERTAS DO DIA</li>
            <li><span>&#128081;</span> ASSINATURA</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};