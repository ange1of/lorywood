export interface Item {
  name: string;
  description?: string;
  imagePath: string;
}

export const kitchenItems: Item[] = [
  {
    name: 'Менажница прямоугольная',
    imagePath: 'kitchen/1.jpg'
  },
  {
    name: 'Тарелки для подачи "Инь-Янь"',
    imagePath: 'kitchen/2.jpg'
  },
  {
    name: 'Сырная доска для подачи',
    imagePath: 'kitchen/3.jpg'
  },
  {
    name: 'Менажница "Ёлочка"',
    imagePath: 'kitchen/4.jpg'
  },
];
