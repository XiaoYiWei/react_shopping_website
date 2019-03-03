import { v4 as uuid } from 'uuid';
export const shopItems = [
  {
    itemId: uuid(),
    itemName: 'Modern Strap',
    itemSubName: 'Black Hardware',
    price: 59.95,
    color: 'black',
    image: 'item1.jpg',
    compatibleSizes: [
      {
        size: '44/42',
        count: 40
      },
      {
        size: '40/38',
        count: 20
      }
    ]
  },
  {
    itemId: uuid(),
    itemName: 'Modern Strap',
    itemSubName: 'Black Hardware',
    price: 59.95,
    color: 'black',
    image: 'item2.jpg',
    compatibleSizes: [
      {
        size: '44/42',
        count: 40
      },
      {
        size: '40/38',
        count: 20
      }
    ]
  },
  {
    itemId: uuid(),
    itemName: 'Modern Strap',
    itemSubName: 'Black Hardware',
    price: 59.95,
    color: 'black',
    image: 'item3.jpg',
    compatibleSizes: [
      {
        size: '44/42',
        count: 40
      },
      {
        size: '40/38',
        count: 20
      }
    ]
  },
  {
    itemId: uuid(),
    itemName: 'Modern Strap',
    itemSubName: 'Black Hardware',
    price: 59.95,
    color: 'black',
    image: 'item4.jpg',
    compatibleSizes: [
      {
        size: '44/42',
        count: 40
      },
      {
        size: '40/38',
        count: 20
      }
    ]
  }
];
