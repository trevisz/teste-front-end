import React from 'react';

export const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__content">
          <h1>Venha conhecer nossas promoções</h1>
          <div className="banner__badge">50% Off nos produtos</div>
          <button className="banner__btn">Ver produto</button>
        </div>
      </div>
    </section>
  );
};