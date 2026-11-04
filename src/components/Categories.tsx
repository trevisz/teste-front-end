import React from 'react';

export const Categories: React.FC = () => {
  const categories = [
    { name: 'Tecnologia', active: true, icon: '💻' },
    { name: 'Supermercado', active: false, icon: '🏪' },
    { name: 'Bebidas', active: false, icon: '🍾' },
    { name: 'Ferramentas', active: false, icon: '🛠️' },
    { name: 'Saúde', active: false, icon: '❤️' },
    { name: 'Esportes e Fitness', active: false, icon: '🏃' },
    { name: 'Moda', active: false, icon: '👗' },
  ];

  return (
    <section className="categories container">
      {categories.map((cat, index) => (
        <div key={index} className={`category-card ${cat.active ? 'active' : ''}`}>
          <div className="category-card__icon">{cat.icon}</div>
          <span>{cat.name}</span>
        </div>
      ))}
    </section>
  );
};