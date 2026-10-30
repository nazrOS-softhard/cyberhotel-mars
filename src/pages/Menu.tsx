import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dailyMenus, dietDescriptions, dietLabels, DietType, Dish } from '../data/menu';

const mealLabels = {
  breakfast: 'Завтрак',
  lunch: 'Обед',
  dinner: 'Ужин',
} as const;

// Тщательно подбираем правильные картинки из вашей папки public
const imageMap: Record<DietType, Record<string, string>> = {
  traditional: {
    breakfast: '/rac_1.jpg', // Овсянка с ягодами
    lunch: '/rac_4.jpg',     // Мясо с овощами
    dinner: '/rac_6.jpg',    // Рыба/мясо с гарниром
  },
  halal: {
    breakfast: '/rac_3.jpg', // Омлет/яичница
    lunch: '/rac_5.jpg',     // Плов с рисом и мясом
    dinner: '/rac_4.jpg',    // Курица с овощами
  },
  vegetarian: {
    breakfast: '/rac_2.jpg', // Смузи-боул или фрукты
    lunch: '/rac_2.jpg',     // Салат с нутом
    dinner: '/rac_1.jpg',    // Овощной боул
  },
};

export default function Menu() {
  const [diet, setDiet] = useState<DietType>('traditional');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [selectedMealLabel, setSelectedMealLabel] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string>('');

  const menu = dailyMenus[diet];
  const meals = ['breakfast', 'lunch', 'dinner'] as const;

  // Блокируем скролл страницы, когда открыт попап
  useEffect(() => {
    if (selectedDish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedDish]);

  // Закрытие по нажатию на Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDish(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openPopup = (dish: Dish, mealKey: string, imageSrc: string) => {
    setSelectedDish(dish);
    setSelectedMealLabel(mealLabels[mealKey as keyof typeof mealLabels]);
    setSelectedImage(imageSrc);
  };

  return (
    <div className="container-mars py-16 relative">
      {/* Заголовок */}
      <h1 className="text-3xl font-display mb-2">МЕНЮ ПИТАНИЯ</h1>
      <p className="text-white/50 mb-8">
        Трёхразовое питание для гостей МАРС — совместно с{' '}
        <span className="text-fff-green">Fitness Food Factory</span>
      </p>

      {/* Фильтры */}
      <div className="flex flex-wrap gap-3 mb-10">
        {(Object.keys(dietLabels) as DietType[]).map((d) => (
          <button
            key={d}
            onClick={() => setDiet(d)}
            className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-all duration-300 ${
              diet === d
                ? 'bg-mars-red text-black shadow-[0_0_15px_rgba(220,38,38,0.5)] scale-105'
                : 'border border-mars-line text-white/70 hover:border-mars-red hover:text-white'
            }`}
          >
            {dietLabels[d]}
          </button>
        ))}
      </div>

      <p className="text-white/60 text-sm mb-10 max-w-xl transition-opacity duration-300">
        {dietDescriptions[diet]}
      </p>

      {/* Сетка карточек */}
      <div className="grid md:grid-cols-3 gap-6">
        {meals.map((m) => {
          const dish = menu[m];
          const imageSrc = imageMap[diet][m];

          return (
            <motion.div
              key={m}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: meals.indexOf(m) * 0.1 }}
              onClick={() => openPopup(dish, m, imageSrc)}
              className="card-mars overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)] border border-transparent hover:border-mars-red/50"
            >
              <div className="w-full h-48 bg-mars-line overflow-hidden relative">
                <img
                  src={imageSrc}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Оверлей при наведении */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-display text-sm border border-white/30 px-4 py-2 rounded-sm bg-black/50">
                    Подробнее
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs text-mars-red uppercase mb-1 font-semibold tracking-wider">{mealLabels[m]}</div>
                <div className="font-display text-lg mb-2 text-white group-hover:text-mars-red transition-colors">{dish.name}</div>
                <p className="text-white/50 text-sm mb-4 flex-grow line-clamp-2">{dish.description}</p>
                <div className="text-white/40 text-xs mt-auto flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-fff-green"></span>
                  {dish.kcal} ккал
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Перекус */}
      <div className="mt-10 card-mars p-6 flex items-center gap-4 border border-mars-line">
        <div className="w-10 h-10 rounded-sm bg-fff-green shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        <div>
          <div className="font-display text-sm mb-1 text-white">Перекус от спонсора</div>
          <div className="text-white/60 text-sm">{menu.snackBar}</div>
        </div>
      </div>

      {/* --- МОДАЛЬНОЕ ОКНО (POPUP) --- */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Останавливаем клик внутри модалки
              className="bg-[#111] border border-mars-line rounded-lg w-full max-w-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.2)] flex flex-col md:flex-row relative"
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-mars-red hover:bg-mars-red transition-all"
              >
                ✕
              </button>

              {/* Левая часть: Картинка */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img src={selectedImage} alt={selectedDish.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Правая часть: Детали */}
              <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col relative z-10">
                <div className="text-xs text-mars-red uppercase mb-2 font-semibold tracking-wider">{selectedMealLabel}</div>
                <h2 className="font-display text-2xl text-white mb-3">{selectedDish.name}</h2>
                <p className="text-white/60 text-sm mb-6">{selectedDish.description}</p>

                {/* БЖУ */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="bg-black/40 border border-mars-line rounded p-2 text-center">
                    <div className="text-white font-bold">{selectedDish.kcal}</div>
                    <div className="text-white/40 text-[10px] uppercase">Ккал</div>
                  </div>
                  <div className="bg-black/40 border border-mars-line rounded p-2 text-center">
                    <div className="text-fff-green font-bold">{selectedDish.protein || '-'}г</div>
                    <div className="text-white/40 text-[10px] uppercase">Белки</div>
                  </div>
                  <div className="bg-black/40 border border-mars-line rounded p-2 text-center">
                    <div className="text-yellow-500 font-bold">{selectedDish.fat || '-'}г</div>
                    <div className="text-white/40 text-[10px] uppercase">Жиры</div>
                  </div>
                  <div className="bg-black/40 border border-mars-line rounded p-2 text-center">
                    <div className="text-blue-400 font-bold">{selectedDish.carbs || '-'}г</div>
                    <div className="text-white/40 text-[10px] uppercase">Углеводы</div>
                  </div>
                </div>

                {/* Состав */}
                <div>
                  <h4 className="text-white/80 text-xs uppercase tracking-wider mb-2 font-semibold">Состав:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {selectedDish.ingredients?.map((ing, idx) => (
                      <li key={idx} className="text-xs text-white/60 bg-mars-line/30 px-2 py-1 rounded-sm border border-mars-line/50">
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
