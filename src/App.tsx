import React, { useEffect, useState } from 'react';
import { getProducts } from './services/api';
import { Product } from './types/product';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import './styles/main.scss';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProducts().then((data) => {
      console.log('Produtos no estado do React:', data);
      setProducts(data);
    });
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <Banner />
      <Categories />
      
      <main className="vitrine container">
        <h2 className="vitrine__title">Produtos relacionados</h2>
        
        <div className="vitrine__tabs">
          <span className="active">CELULAR</span>
          <span>ACESSÓRIOS</span>
          <span>TABLETS</span>
          <span>NOTEBOOKS</span>
          <span>TVS</span>
          <span>VER TODOS</span>
        </div>

        <div className="vitrine__grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </main>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Footer />
    </div>
  );
};

export default App;