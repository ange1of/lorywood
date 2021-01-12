// eslint-disable-next-line no-shadow
export enum ItemType {
  image,
  instagram,
}

export type PhotoItem = {
  type: ItemType.image;
  name: string;
  description?: string;
  imagePath: string;
  isHovering?: boolean | null;
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

export const interiorItems: Item[] = [
  {
    type: ItemType.image,
    name: 'Часы настренные в форме среза ствола',
    imagePath: 'interior/1.jpg',
  },
  {
    type: ItemType.image,
    name: 'Настенный держатель для бутылки и бокалов',
    imagePath: 'interior/2.jpg',
  },
];

export const souvenirsItems: Item[] = [
  {
    type: ItemType.image,
    name: 'Полка настенная в с подкадкой в форме сердца',
    imagePath: 'souvenirs/1.jpg',
  },
  {
    type: ItemType.image,
    name: 'Пара зайцев',
    imagePath: 'souvenirs/2.jpg',
  },
  {
    type: ItemType.image,
    name: 'Бычок',
    imagePath: 'souvenirs/4.jpg',
  },
];

export type Review = {
  name: string;
  comment: string;
};

export const reviews: Review[] = [
  {
    name: 'Данил из ИТМО',
    comment: 'Очень креативные изделия, дерево лучшего качества',
  },
  {
    name: 'xXx[Pepega]xXx',
    comment: 'Менажница подошла к моей зеленой жабе',
  },
];
