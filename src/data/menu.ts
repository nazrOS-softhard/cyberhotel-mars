export type DietType = 'traditional' | 'halal' | 'vegetarian';

export interface Dish {
  name: string;
  description: string;
  imageQuery: string;
  kcal: number;
}

export interface DailyMenu {
  breakfast: Dish;
  lunch: Dish;
  dinner: Dish;
  snackBar: string; // продукция-спонсор Fitness Food Factory к рациону
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
      name: 'Овсянка с курицей и яйцом-пашот',
      description: 'Овсяная каша, куриное филе гриль, яйцо-пашот, авокадо.',
      imageQuery: 'protein breakfast bowl oatmeal chicken egg',
      kcal: 520,
    },
    lunch: {
      name: 'Говядина с гречкой и овощами гриль',
      description: 'Тушёная говядина, гречневая крупа, сезонные овощи на гриле.',
      imageQuery: 'beef buckwheat grilled vegetables plate',
      kcal: 680,
    },
    dinner: {
      name: 'Лосось с киноа и шпинатом',
      description: 'Запечённый лосось, киноа, шпинат, лимонный соус.',
      imageQuery: 'salmon quinoa spinach dinner plate',
      kcal: 590,
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (классический)',
  },
  halal: {
    breakfast: {
      name: 'Омлет с индейкой и овощами',
      description: 'Омлет из двух яиц, филе индейки, томаты, зелень — халяль-сертификат.',
      imageQuery: 'omelette turkey vegetables breakfast plate',
      kcal: 480,
    },
    lunch: {
      name: 'Плов с говядиной халяль',
      description: 'Рис басмати, говядина халяль, морковь, специи.',
      imageQuery: 'halal beef rice pilaf plate',
      kcal: 650,
    },
    dinner: {
      name: 'Куриное филе гриль с булгуром',
      description: 'Куриное филе халяль на гриле, булгур, овощи на пару.',
      imageQuery: 'grilled halal chicken bulgur vegetables',
      kcal: 560,
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (без желатина, халяль-состав)',
  },
  vegetarian: {
    breakfast: {
      name: 'Тофу-скрэмбл с авокадо',
      description: 'Скрэмбл из тофу с куркумой, авокадо, цельнозерновой тост.',
      imageQuery: 'tofu scramble avocado toast breakfast',
      kcal: 430,
    },
    lunch: {
      name: 'Чечевичный дал с рисом',
      description: 'Чечевица, томаты, специи, рис басмати.',
      imageQuery: 'lentil dal rice vegetarian bowl',
      kcal: 560,
    },
    dinner: {
      name: 'Боул с нутом и печёными овощами',
      description: 'Нут, печёные овощи, тахини-соус, киноа.',
      imageQuery: 'chickpea roasted vegetable grain bowl',
      kcal: 510,
    },
    snackBar: 'Протеиновый батончик Fitness Food Factory (веган)',
  },
};
