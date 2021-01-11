// eslint-disable-next-line no-shadow
export enum ItemType {
  image,
  instagram,
}

type PhotoItem = {
  type: ItemType.image;
  name: string;
  description?: string;
  imagePath: string;
};

type InstagramItem = {
  type: ItemType.instagram;
  postId: string;
};

export type Item = PhotoItem | InstagramItem;

export const kitchenItems: Item[] = [
  {
    type: ItemType.image,
    name: 'Менажница прямоугольная',
    imagePath: 'kitchen/1.jpg',
  },
  {
    type: ItemType.image,
    name: 'Тарелки для подачи "Инь-Янь"',
    imagePath: 'kitchen/2.jpg',
  },
  {
    type: ItemType.image,
    name: 'Сырная доска для подачи',
    imagePath: 'kitchen/3.jpg',
  },
  {
    type: ItemType.image,
    name: 'Менажница "Ёлочка"',
    imagePath: 'kitchen/4.jpg',
  },
];

export const lightItems: Item[] = [
  {
    type: ItemType.instagram,
    postId: 'CEyOTKIJ-VO',
  },
  {
    type: ItemType.instagram,
    postId: 'B7ti-O7C0bQ',
  },
];
