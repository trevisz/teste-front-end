import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__col">
          <h4>Sobre nós</h4>
          <ul>
            <li>Conheça</li>
            <li>Depoimentos</li>
            <li>Trabalhe conosco</li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Ajuda</h4>
          <ul>
            <li>Suporte</li>
            <li>Fale Conosco</li>
            <li>Perguntas Frequentes</li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Termos</h4>
          <ul>
            <li>Termos e Condições</li>
            <li>Política de Privacidade</li>
            <li>Trocas e Devoluções</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright &copy; 2026. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};