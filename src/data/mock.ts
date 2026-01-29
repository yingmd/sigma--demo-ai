export const CATEGORIES = [
  { id: 1, title: '水果', image: '/images/mkgy5dup-fv5zvj9.png' },
  { id: 2, title: '蔬菜', image: '/images/mkgy5dup-si4mrh2.png' },
  { id: 3, title: '肉类', image: '/images/mkgy5dup-c96cnyn.png' },
  { id: 4, title: '海鲜', image: '/images/mkgy5dup-5ghu429.png' },
  { id: 5, title: '零食', image: '/images/mkgy5dup-fv5zvj9.png' },
];

export const PRODUCTS = [
  { 
    id: 1, 
    brand: '有机农场', 
    name: '新鲜梨子', 
    price: 10.99, 
    originalPrice: 12.99,
    image: '/images/mkgy5dup-l4pjo8j.png',
    description: '本地果园新鲜有机梨，香甜多汁',
    rating: 4.8,
    reviews: 120,
    categoryId: 1
  },
  { 
    id: 2, 
    brand: '本地优选', 
    name: '西瓜', 
    price: 5.99, 
    image: '/images/mkgy5dup-y87oe6v.png',
    description: '清甜爽口西瓜，夏日必备',
    rating: 4.5,
    reviews: 85,
    categoryId: 1
  },
  { 
    id: 3, 
    brand: '农家直供', 
    name: '新鲜蘑菇', 
    price: 8.49, 
    image: '/images/mkgy5duq-4pgtgh9.png',
    description: '农场新鲜蘑菇，口感醇厚',
    rating: 4.7,
    reviews: 56,
    categoryId: 2
  },
  { 
    id: 4, 
    brand: '进口优选', 
    name: '车厘子', 
    price: 15.99, 
    image: '/images/mkgy5dup-l4pjo8j.png',
    description: '进口优质车厘子，个头大味道甜',
    rating: 4.9,
    reviews: 230,
    categoryId: 1
  },
  { 
    id: 5, 
    brand: '海鲜世家', 
    name: '三文鱼排', 
    price: 25.99, 
    image: '/images/mkgy5dup-5ghu429.png',
    description: '新鲜大西洋三文鱼排，富含Omega-3',
    rating: 4.8,
    reviews: 150,
    categoryId: 4
  },
  { 
    id: 6, 
    brand: '烘焙工坊', 
    name: '全麦面包', 
    price: 3.99, 
    image: '/images/mkgy5dup-fv5zvj9.png',
    description: '新鲜烘焙全麦面包，健康美味',
    rating: 4.6,
    reviews: 90,
    categoryId: 5
  }
];

export const CART_ITEMS = [
  { ...PRODUCTS[0], quantity: 2 },
  { ...PRODUCTS[2], quantity: 1 }
];

export const USER_PROFILE = {
  name: '张三',
  email: 'zhangsan@example.com',
  avatar: '/images/mkgy5duk-k4uucgi.svg',
  orders: 12,
  following: 5,
  vouchers: 3
};
