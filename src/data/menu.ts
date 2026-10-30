export type DietType = 'traditional' | 'halal' | 'vegetarian';

export interface Dish {
  name: string;
  description: string;
  imageQuery: string;
  kcal: number;
  protein?: number;
  fat?: number;
  carbs?: number;
  ingredients?: string[];
}

export interface DailyMenu {
  breakfast: Dish;
  lunch: Dish;
  dinner: Dish;
  snackBar: string;
}

export interface SponsorProduct {
  name: string;
  description: string;
  image: string;
  features: string[];
  nutrition: string;
  volume: string;
}

export const dietLabels: Record<DietType, string> = {
  traditional: 'Традиционное',
  halal: 'Халяль',
  vegetarian: 'Вегетарианское',
};

export const dietDescriptions: Record<DietType, string> = {
  traditional: 'Сбалансированный рацион для активного игрового марафона: белки, сложные углеводы, никаких ограничений.',
  halal: 'Полностью халяльный рацион: сертифицированное мясо птицы и говядины, без свинины и алкоголя в составе.',
  vegetarian: 'Растительный рацион с акцентом на белок из бобовых, тофу и злаков — без мяса и рыбы.',
};

export const dailyMenus: Record<DietType, DailyMenu> = {
  traditional: {
    breakfast: {
      name: 'Овсянка с ягодами',
      description: 'Овсяная каша на молоке, свежие ягоды, миндаль и мёд.',
      imageQuery: 'oatmeal',
      kcal: 450, protein: 15, fat: 12, carbs: 65,
      ingredients: ['Овсяные хлопья', 'Молоко 2.5%', 'Свежая клубника', 'Голубика', 'Миндаль', 'Мёд'],
    },
    lunch: {
      name: 'Говядина с гречкой и овощами',
      description: 'Тушёная говядина, гречневая крупа, сезонные овощи на гриле.',
      imageQuery: 'beef buckwheat',
      kcal: 680, protein: 45, fat: 18, carbs: 70,
      ingredients: ['Говядина', 'Гречка', 'Кабачки', 'Болгарский перец', 'Оливковое масло'],
    },
    dinner: {
      name: 'Форель со скрэмблом',
      description: 'Запечённая форель, яичный скрэмбл, свежий шпинат, томаты.',
      imageQuery: 'salmon quinoa',
      kcal: 590, protein: 38, fat: 25, carbs: 15,
      ingredients: ['Филе форели', 'Яйца', 'Шпинат', 'Томаты черри', 'Сливочное масло'],
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (классический)',
  },
  halal: {
    breakfast: {
      name: 'Паста с курицей и томатами',
      description: 'Макароны из твердых сортов, куриное филе халяль, томаты черри, зелень.',
      imageQuery: 'pasta chicken',
      kcal: 480, protein: 35, fat: 22, carbs: 15,
      ingredients: ['Макароны', 'Куриное филе', 'Томаты черри', 'Шпинат', 'Сливки'],
    },
    lunch: {
      name: 'Плов с говядиной халяль',
      description: 'Рис басмати, тушеная говядина халяль, морковь, специи.',
      imageQuery: 'halal beef rice',
      kcal: 650, protein: 40, fat: 20, carbs: 80,
      ingredients: ['Говядина халяль', 'Рис басмати', 'Морковь', 'Лук', 'Специи'],
    },
    dinner: {
      name: 'Куриное филе с овощами',
      description: 'Куриное филе халяль на гриле, овощи, зелень.',
      imageQuery: 'grilled chicken',
      kcal: 560, protein: 42, fat: 15, carbs: 55,
      ingredients: ['Куриное филе халяль', 'Брокколи', 'Цветная капуста', 'Оливковое масло'],
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (без желатина, халяль-состав)',
  },
  vegetarian: {
    breakfast: {
      name: 'Овсяный боул с ягодами',
      description: 'Овсянка на растительном молоке, свежие ягоды, кокосовая стружка.',
      imageQuery: 'smoothie bowl',
      kcal: 380, protein: 10, fat: 8, carbs: 60,
      ingredients: ['Овсянка', 'Миндальное молоко', 'Клубника', 'Голубика', 'Кокосовая стружка'],
    },
    lunch: {
      name: 'Салат с нутом и овощами',
      description: 'Нут, свежие овощи, авокадо, тахини-соус, кунжут.',
      imageQuery: 'chickpea salad',
      kcal: 510, protein: 18, fat: 25, carbs: 45,
      ingredients: ['Нут', 'Авокадо', 'Огурец', 'Помидоры', 'Тахини', 'Кунжут'],
    },
    dinner: {
      name: 'Боул с нутом и овощами',
      description: 'Печёные овощи, нут, киноа, соус на основе соевого йогурта.',
      imageQuery: 'tofu bowl',
      kcal: 490, protein: 22, fat: 18, carbs: 55,
      ingredients: ['Нут', 'Киноа', 'Брокколи', 'Сладкий картофель', 'Соевый йогурт'],
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (веган)',
  },
};

export const sponsorProducts: Record<DietType, SponsorProduct> = {
  traditional: {
    name: 'CAFFEINE WATER LEMONGRASS',
    description: 'Прекрасный напиток для активных людей, ценящих свежесть и тонкий аромат. Легкий вкус лемонграсса наполнит ваши тренировки продуктивной энергией.',
    image: '/coffe.png',
    features: ['Вкус не оставит равнодушным', 'Заряд энергии', 'Без сахара'],
    nutrition: 'Кофеин: 100 мг | Энергетическая ценность: 4,0 кДж / 1,0 ккал',
    volume: 'ПЭТ-бутылка 500 мл',
  },
  halal: {
    name: 'WK UP ORIGINAL',
    description: 'Взрыв чистой энергии! Ощутите прилив сил и выносливости, улучшите концентрацию и достигните новых спортивных вершин.',
    image: '/energ.png',
    features: ['Вкус не оставит равнодушным', 'Мощный заряд энергии', 'Без сахара'],
    nutrition: 'Кофеин: 30 мг | Аргинин: 100 мг | Таурин: 18 мг',
    volume: 'Алюминиевая банка 450 мл',
  },
  vegetarian: {
    name: 'VITAWELL VITAMIN WATER',
    description: 'Яркий, но не приторный аромат ежевики позволит насладиться каждым глотком. Добавленные витамины в составе поддержат ваши силы во время тренировок.',
    image: '/blackberry.png',
    features: ['Вкус не оставит равнодушным', 'Витаминный заряд', 'Без сахара'],
    nutrition: 'Витамины группы B | Витамин C | Витамин E',
    volume: 'ПЭТ-бутылка 500 мл',
  },
};
