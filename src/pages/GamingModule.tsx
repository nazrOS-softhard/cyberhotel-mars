import { useState } from 'react';

const specs = [
  { 
    title: 'Флагманские игровые ПК', 
    desc: 'Производительные процессоры и видеокарты NVIDIA GeForce RTX. Максимальная производительность в современных играх.' 
  },
  { 
    title: 'Мониторы 27″ — до 360 Гц', 
    desc: 'Высокая частота обновления, минимальная задержка и чёткое изображение.' 
  },
  { 
    title: 'Механические клавиатуры', 
    desc: 'Быстрый отклик и точность управления.' 
  },
  { 
    title: 'Профессиональные игровые кресла', 
    desc: 'Эргономика и комфорт даже во время длительных игровых сессий.' 
  },
  { 
    title: 'Премиальная периферия', 
    desc: 'Игровые мыши, гарнитуры и большие коврики.' 
  },
];

// Массив с картинками для блока "В каждом номере"
const peripherals = [
  { name: 'Игровой ПК', img: '/gaming-main.png' }, 
  { name: 'Монитор 27" 360Гц', img: '/termo.png' }, // Уточни, что тут за картинка, но пока оставим
  { name: 'Наушники', img: '/ushi.png' },
  { name: 'Клавиатура', img: '/key.png' },
  { name: 'Мышь', img: '/mouse.png' },
];

export default function GamingModule() {
  // Состояние для модального окна
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">ИГРОВОЙ МОДУЛЬ</h1>
      <p className="text-white/50 mb-10">Топовое оборудование. Без компромиссов.</p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img
          src="/gaming-main.png"
          alt="Игровой модуль МАРС"
          className="rounded-md w-full h-96 object-cover border border-mars-line"
        />

        <ul className="space-y-5">
          {specs.map((s) => (
            <li key={s.title} className="flex gap-4">
              <span className="w-2 h-2 mt-2 rounded-full bg-mars-red shrink-0" />
              <div>
                <div className="font-display text-sm">{s.title}</div>
                <div className="text-white/50 text-sm">{s.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-xl font-display mt-16 mb-6">В каждом номере</h2>
      
      {/* Сетка карточек */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {peripherals.map((item) => (
          <div 
            key={item.name} 
            className="card-mars relative overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(item.img)}
          >
            {/* Картинка на всю карточку */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Затемняющий слой, чтобы текст читался */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            
            {/* Текст поверх картинки */}
            <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
              <div className="text-[10px] text-center text-white/80 font-mono tracking-wider">{item.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно (Попап) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)} // Закрыть при клике на фон
        >
          <div 
            className="relative max-w-3xl w-full bg-surface border border-mars-line rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Не закрывать при клике на картинку
          >
            <button 
              className="absolute top-4 right-4 z-10 text-white/50 hover:text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Просмотр" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
