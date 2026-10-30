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
      name: 'Овсянка с ягодами и орехами',
      description: 'Овсяная каша на молоке, свежие ягоды, миндаль, мёд.',
      imageQuery: 'oatmeal berries',
      kcal: 450,
      protein: 15, fat: 12, carbs: 65,
      ingredients: ['Овсяные хлопья', 'Молоко 2.5%', 'Свежая клубника', 'Голубика', 'Миндаль', 'Мёд'],
    },
    lunch: {
      name: 'Куриное филе с гречкой и овощами',
      description: 'Запеченное куриное филе, гречневая крупа, сезонные овощи на гриле.',
      imageQuery: 'chicken buckwheat vegetables',
      kcal: 680,
      protein: 45, fat: 18, carbs: 70,
      ingredients: ['Куриное филе', 'Гречка', 'Кабачки', 'Болгарский перец', 'Оливковое масло'],
    },
    dinner: {
      name: 'Лосось с киноа и шпинатом',
      description: 'Запечённый лосось, киноа, свежий шпинат, лимонный соус.',
      imageQuery: 'salmon quinoa spinach',
      kcal: 590,
      protein: 38, fat: 25, carbs: 45,
      ingredients: ['Филе лосося', 'Киноа', 'Шпинат', 'Лимон', 'Сливочное масло'],
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (классический)',
  },
  halal: {
    breakfast: {
      name: 'Омлет с индейкой и томатами',
      description: 'Омлет из двух яиц, филе индейки, томаты, зелень — халяль-сертификат.',
      imageQuery: 'omelette turkey',
      kcal: 480,
      protein: 35, fat: 22, carbs: 15,
      ingredients: ['Яйца', 'Филе индейки', 'Томаты черри', 'Шпинат', 'Сливки'],
    },
    lunch: {
      name: 'Плов с говядиной халяль',
      description: 'Рис басмати, тушеная говядина халяль, морковь, специи.',
      imageQuery: 'halal beef rice pilaf',
      kcal: 650,
      protein: 40, fat: 20, carbs: 80,
      ingredients: ['Говядина халяль', 'Рис басмати', 'Морковь', 'Лук', 'Специи'],
    },
    dinner: {
      name: 'Куриное филе гриль с булгуром',
      description: 'Куриное филе халяль на гриле, булгур, овощи на пару.',
      imageQuery: 'grilled halal chicken',
      kcal: 560,
      protein: 42, fat: 15, carbs: 55,
      ingredients: ['Куриное филе халяль', 'Булгур', 'Брокколи', 'Цветная капуста'],
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (без желатина, халяль-состав)',
  },
  vegetarian: {
    breakfast: {
      name: 'Смузи-боул с ягодами',
      description: 'Асаи, банан, гранола, кокосовая стружка, свежие ягоды.',
      imageQuery: 'smoothie bowl',
      kcal: 380,
      protein: 10, fat: 8, carbs: 60,
      ingredients: ['Асаи', 'Банан', 'Гранола', 'Кокосовая стружка', 'Клубника'],
    },
    lunch: {
      name: 'Салат с нутом и авокадо',
      description: 'Нут, свежие овощи, авокадо, тахини-соус, кунжут.',
      imageQuery: 'chickpea avocado salad',
      kcal: 510,
      protein: 18, fat: 25, carbs: 45,
      ingredients: ['Нут', 'Авокадо', 'Огурец', 'Помидоры', 'Тахини', 'Кунжут'],
    },
    dinner: {
      name: 'Боул с тофу и овощами',
      description: 'Тофу, печёные овощи, киноа, соус на основе соевого йогурта.',
      imageQuery: 'tofu bowl',
      kcal: 490,
      protein: 22, fat: 18, carbs: 55,
      ingredients: ['Тофу', 'Киноа', 'Брокколи', 'Сладкий картофель', 'Соевый йогурт'],
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (веган)',
  },
};
