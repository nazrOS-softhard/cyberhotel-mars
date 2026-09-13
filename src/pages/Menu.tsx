import { useState } from 'react';
import SmartImage from '../components/SmartImage';
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

  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">МЕНЮ ПИТАНИЯ</h1>
      <p className="text-white/50 mb-8">
        Трёхразовое питание для гостей МАРС — совместно с{' '}
        <span className="text-fff-green">Fitness Food Factory</span>
      </p>

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
          return (
            <div key={m} className="card-mars overflow-hidden">
              <SmartImage
                query={dish.imageQuery}
                alt={dish.name}
                seed={`${diet}-${m}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="text-xs text-mars-red uppercase mb-1">{mealLabels[m]}</div>
                <div className="font-display text-sm mb-2">{dish.name}</div>
                <p className="text-white/50 text-xs mb-3">{dish.description}</p>
                <div className="text-white/40 text-xs">{dish.kcal} ккал</div>
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
