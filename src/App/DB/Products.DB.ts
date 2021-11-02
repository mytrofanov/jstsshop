import { Product } from '../Interfaces/Product';

const PRODUCTS: Product[] = [
  {
    favorite: false,
    id: 'product1',
    image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/1.1.png',
    name: 'computer details: NoteBook',
    price: 110,
  },
  {
    favorite: false,
    id: 'product2',
    image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/1.2.png',
    name: 'computer details: ',
    price: 98,
  },
  {
    favorite: false,
    id: 'product3',
    image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/1.4.png',
    name: 'computer details: ',
    price: 99,
  },
  {
    favorite: false,
    id: 'product4',
    image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/1.5.png',
    name: 'computer details: ',
    price: 100,
  },
  {
    favorite: true,
    id: 'product4',
    image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/2.3.jpg',
    name: 'computer details: ',
    price: 100,
  },
  {
    favorite: false,
    id: 'product4',
    image: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/3.2.jpg',
    name: 'computer details: ',
    price: 100,
  },
];
export const getProducts = (): Promise<Product[]> => {
  return new Promise<Product[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error('Smth went wrong on server'));
      } else {
        resolve(PRODUCTS);
      }
    }, 2000);
  });
};
