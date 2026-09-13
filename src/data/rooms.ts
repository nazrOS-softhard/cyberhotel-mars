export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  imageQuery: string;
  features: string[];
}

export const rooms: Room[] = [
  {
    id: 'capsule',
    name: 'Капсула',
    description: 'Уютное пространство для сна и отдыха: всё, что нужно — рядом.',
    pricePerNight: 1500,
    imageQuery: 'cyberpunk capsule hotel pod red neon',
    features: ['1 место', 'Wi-Fi', 'ПК', 'Душ на этаже'],
  },
  {
    id: 'standard',
    name: 'Стандарт',
    description: 'Отдельная комната с игровой зоной и рабочим местом.',
    pricePerNight: 3500,
    imageQuery: 'gaming room setup red led dark',
    features: ['1-2 места', 'Игровой ПК RTX', 'Монитор 240Гц', 'Своя ванная'],
  },
  {
    id: 'premium',
    name: 'Премиум',
    description: 'Просторные апартаменты с улучшенным шумоизоляцией и топовым ПК.',
    pricePerNight: 5500,
    imageQuery: 'futuristic gaming apartment neon interior',
    features: ['До 2 мест', 'ПК 4090', 'Премиум периферия', 'Мини-бар'],
  },
  {
    id: 'family',
    name: 'Семейный',
    description: 'Два отдельных места + общая игровая зона.',
    pricePerNight: 7000,
    imageQuery: 'shared gaming lounge multiple monitors neon',
    features: ['До 4 мест', '2 игровых ПК', 'Общая зона', 'Кухня'],
  },
];
