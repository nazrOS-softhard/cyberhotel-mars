import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sponsorProducts } from '../data/menu';

const values = [
  { title: 'Энергия и функциональность', icon: '⚡' },
  { title: 'Натуральные ингредиенты', icon: '🌿' },
  { title: 'Поддержка активного образа жизни', icon: '🏋️' },
  { title: 'Технологии и качество', icon: '🧪' },
];

// Типизация для выбранного продукта (берем из вашего типа SponsorProduct)
interface SelectedProduct {
  name: string;
  description: string;
  image: string;
  features: string[];
  nutrition: string;
  volume: string;
}

export default function Partner() {
  const products = Object.values(sponsorProducts);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);

  // Блокировка скролла при открытом попапе
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  // Закрытие по Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div>
      <section className="bg-fff-black">
        <div className="container-mars py-16">
          <div className="text-fff-green text-xs uppercase tracking-wider mb-3">Официальный партнёр по питанию</div>
          <h1 className="text-3xl font-display mb-4">FITNESS FOOD FACTORY</h1>
          <p className="text-white/60 max-w-xl mb-8">
            Fitness Food Factory — это энергия, технологии и забота о себе.
            Функциональные напитки и продукты для активных людей, которые
            выбирают качество, движение и осознанный образ жизни.{' '}
            <a href="https://fitnessfoodfactory.ru/" target="_blank" rel="noopener noreferrer" className="text-fff-green underline underline-offset-2 hover:text-white">
              fitnessfoodfactory.ru
            </a>
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {values.map((v) => (
              <div key={v.title} className="border border-white/10 rounded-md p-4 text-center">
                <div className="text-xl mb-2">{v.icon}</div>
                <div className="text-white/60 text-xs">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-mars py-16">
        <h2 className="text-xl font-display mb-8">Продукция</h2>
        
        {/* Сетка продуктов с интерактивом */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {products.map((p) => (
            <div 
              key={p.name} 
              onClick={() => setSelectedProduct(p)}
              className="card-mars overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,197,94,0.15)] border border-transparent hover:border-fff-green/50 bg-[#111]"
            >
              <div className="w-full h-48 bg-white/5 p-4 flex items-center justify-center relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
                  loading="lazy"
                />
                {/* Оверлей при наведении */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-display text-sm border border-white/30 px-4 py-2 rounded-sm bg-black/50">
                    Подробнее
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow border-t border-mars-line">
                <div className="font-display text-sm mb-2 text-white group-hover:text-fff-green transition-colors">{p.name}</div>
                <div className="text-white/50 text-xs mb-3 flex-grow line-clamp-2">{p.description}</div>
                
                <div className="text-[10px] text-white/40 mt-auto border-t border-white/10 pt-2 uppercase tracking-wide">
                   {p.nutrition}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-mars p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <h3 className="font-display text-lg mb-2">Питание для гостей МАРС</h3>
            <p className="text-white/60 text-sm max-w-md">
              Три рациона на выбор — традиционное, халяль, вегетарианское —
              с перекусами и напитками от Fitness Food Factory в каждом.
            </p>
          </div>
          <Link to="/menu" className="px-6 py-3 bg-mars-red text-black font-semibold text-sm rounded-sm hover:bg-white hover:text-mars-red transition-colors whitespace-nowrap">
            Смотреть меню
          </Link>
        </div>
      </section>

      {/* --- МОДАЛЬНОЕ ОКНО (ПОПАП) ПРОДУКТА --- */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111] border border-mars-line rounded-lg w-full max-w-4xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.2)] flex flex-col md:flex-row relative animate-[zoomIn_0.3s_ease-out]"
          >
            {/* Кнопка закрытия */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/60 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-fff-green hover:bg-fff-green hover:text-black transition-all"
            >
              ✕
            </button>

            {/* Левая часть: Картинка */}
            <div className="w-full md:w-1/2 bg-white/5 p-8 flex items-center justify-center relative">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="max-h-[400px] w-auto object-contain drop-shadow-2xl" 
              />
            </div>

            {/* Правая часть: Описание */}
            <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col relative z-10">
              <div className="text-xs text-fff-green uppercase mb-2 font-semibold tracking-wider">Fitness Food Factory</div>
              <h2 className="font-display text-3xl text-white mb-4">{selectedProduct.name}</h2>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">{selectedProduct.description}</p>
              
              <div className="mb-6">
                <h4 className="text-white/80 text-xs uppercase tracking-wider mb-3 font-semibold">Преимущества:</h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="text-fff-green">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-black/40 border border-mars-line rounded-lg p-4 mt-auto">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Пищевая ценность:</div>
                <div className="text-white/80 text-sm mb-3">{selectedProduct.nutrition}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Форма выпуска:</div>
                <div className="text-white/80 text-sm">{selectedProduct.volume}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
