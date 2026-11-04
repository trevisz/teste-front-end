import axios from 'axios';
import { Product } from '../types/product';

export const getProducts = async (): Promise<Product[]> => {
  const targetUrl = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
  
  const endpoints = [
    '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
    `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`
  ];

  for (const url of endpoints) {
    try {
      const response = await axios.get(url);
      let data = response.data;

      if (typeof data === 'string') {
        data = JSON.parse(data);
      }

      if (data && Array.isArray(data.products) && data.products.length > 0) {
        return data.products;
      }
    } catch (err) {
      continue;
    }
  }

  return [];
};