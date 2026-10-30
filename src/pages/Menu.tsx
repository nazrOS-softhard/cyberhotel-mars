import { useState } from 'react';
// Импортируем нужные данные из вашего файла
import { dailyMenus, dietDescriptions, dietLabels, DietType } from '../data/menu';

const mealLabels = {
  breakfast: 'Завтрак',
  lunch: 'Обед',
  dinner: 'Ужин',
} as const;

export default function Menu() {
  const [diet, setDiet] = useState<DietType>('traditional');
  const menu = dailyMenus[diet];
  const meals = ['breakfast', 'lunch', 'dinner'] as const;

  // Маппинг: какие файлы картинок привязать к каким диетам и приемам пищи.
  // Названия файлов взяты с вашего скриншота.
  const imageMap: Record<DietType, Record<string, string>> = {
    traditional: {
      breakfast: '/images/rac_1.jpg',
      lunch: '/images/rac_3.jpg',
      dinner: '/images/rac_4.jpg',
    },
    halal: {
      breakfast: '/images/rac_6.jpg',
      lunch: '/images/rac_1.jpg', // Поменяйте на те, что больше подходят
      dinner: '/images/rac_5.jpg',
    },
    vegetarian: {
      breakfast: '/images/rac_2.jpg',
      lunch: '/images/rac_4.jpg',
      dinner: '/images/rac_6.jpg',
    },
  };

  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">МЕНЮ ПИТАНИЯ</h1>
      <p className="text-white/50 mb-8">
        Трёхразовое питание для гостей МАРС — совместно с{' '}
        <span className="text-fff-green">Fitness Food Factory</span>
      </p>

      {/* Фильтры (Классическое / Халяль / Вегетарианское) */}
      <div className="flex flex-wrap gap-3 mb-10">
        {(Object.keys(dietLabels) as DietType[]).map((d) => (
          <button
            key={d}
            onClick={() => setDiet(d)}
            className={`px-4 py-2 rounded-sm text-sm border transition-colors ${
              diet === d
                ? 'bg-mars-red text-black border-mars-red font-semibold'
                : 'border-mars-line text-white/70 hover:border-mars-red'
            }`}
          >
            {dietLabels[d]}
          </button>
        ))}
      </div>

      <p className="text-white/60 text-sm mb-10 max-w-xl">{dietDescriptions[diet]}</p>

      <div className="grid md:grid-cols-3 gap-6">
        {meals.map((m) => {
          const dish = menu[m];
          // Берем нужную картинку из маппинга. Если вдруг нет — ставим первую попавшуюся.
          const imageSrc = imageMap[diet][m] || '/images/rac_1.jpg';

          return (
            <div key={m} className="card-mars overflow-hidden flex flex-col">
              {/* Обычный тег img вместо SmartImage */}
              <img
                src={imageSrc}
                alt={dish.name}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs text-mars-red uppercase mb-1">{mealLabels[m]}</div>
                <div className="font-display text-sm mb-2">{dish.name}</div>
                <p className="text-white/50 text-xs mb-3 flex-grow">{dish.description}</p>
                <div className="text-white/40 text-xs mt-auto">{dish.kcal} ккал</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 card-mars p-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-sm bg-fff-green shrink-0" />
        <div>
          <div className="font-display text-sm mb-1">Перекус от спонсора</div>
          <div className="text-white/60 text-sm">{menu.snackBar}</div>
        </div>
      </div>
    </div>
  );
}
