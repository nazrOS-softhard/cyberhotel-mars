'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ТИПЫ ДАННЫХ ---
interface Peripheral {
  id: string;
  name: string;
  img: string;
  description: string;
}

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

// Массив карточек
const peripherals: Peripheral[] = [
  { id: 'pc', name: 'Игровой ПК', img: '/gaming-main.png', description: 'Флагманская сборка на базе NVIDIA RTX' },
  { id: 'monitor', name: 'Монитор 27" 360Гц', img: '', description: 'Максимальная плавность и отклик' }, // Нет картинки
  { id: 'headphones', name: 'Наушники', img: '/ushi.png', description: 'Погружение в звук' },
  { id: 'keyboard', name: 'Клавиатура', img: '/key.png', description: 'Механика для точных нажатий' },
  { id: 'mouse', name: 'Мышь', img: '/mouse.png', description: 'Точность на пределе возможного' },
];

// --- КОМПОНЕНТ КАРТОЧКИ ---
const PeripheralCard = ({ item, onClick }: { item: Peripheral; onClick: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layoutId={`card-${item.id}`}
      onClick={onClick}
      className="group relative h-full w-full rounded-xl overflow-hidden cursor-pointer bg-[#0f0f12] border border-[#1f1f23] hover:border-mars-red/50 transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Скелетон загрузки */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1f] to-[#2a2a30] animate-pulse" />
      )}
      
      {/* Картинка */}
      {item.img ? (
        <img
          src={item.img}
          alt={item.name}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#111118]">
          <span className="text-[10px] text-white/20 font-mono uppercase">No Image</span>
        </div>
      )}

      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Блик при наведении */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent" />

      {/* Текст */}
      <div className="absolute inset-x-0 bottom-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-[11px] font-mono tracking-wider text-mars-red font-semibold uppercase">
          {item.name}
        </div>
      </div>
    </motion.div>
  );
};

// --- ОСНОВНОЙ КОМПОНЕНТ ---
export default function GamingModule() {
  const [selectedPeripheral, setSelectedPeripheral] = useState<Peripheral | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Закрытие по Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPeripheral(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Блокировка скролла при открытом модальном окне
  useEffect(() => {
    if (selectedPeripheral) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPeripheral]);

  return (
    <div className="container-mars py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-display mb-2 text-white">ИГРОВОЙ МОДУЛЬ</h1>
        <p className="text-white/50 mb-10">Топовое оборудование. Без компромиссов.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/gaming-main.png"
            alt="Игровой модуль МАРС"
            className="rounded-xl w-full h-96 object-cover border border-[#1f1f23] shadow-[0_0_30px_rgba(255,42,42,0.1)]"
          />
        </motion.div>

        <ul className="space-y-5">
          {specs.map((s, index) => (
            <motion.li 
              key={s.title} 
              className="flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <span className="w-2 h-2 mt-2 rounded-full bg-mars-red shadow-[0_0_10px_rgba(255,42,42,0.8)] shrink-0" />
              <div>
                <div className="font-display text-sm text-white">{s.title}</div>
                <div className="text-white/50 text-sm leading-relaxed">{s.desc}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.h2 
        className="text-xl font-display mt-16 mb-6 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        В каждом номере
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-[220px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {peripherals.map((item) => (
          <PeripheralCard 
            key={item.id} 
            item={item} 
            onClick={() => setSelectedPeripheral(item)} 
          />
        ))}
      </motion.div>

      {/* --- МОДАЛЬНОЕ ОКНО (ПОПАП) --- */}
      <AnimatePresence>
        {selectedPeripheral && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Задний фон */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedPeripheral(null)}
            />

            {/* Само окно */}
            <motion.div
              layoutId={`card-${selectedPeripheral.id}`}
              ref={modalRef}
              className="relative w-full max-w-4xl bg-[#0f0f12] border border-[#2a2a30] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,42,42,0.15)]"
              onClick={(e: React.MouseEvent) => e.stopPropagation()} 
            >
              {/* Кнопка закрытия */}
              <button
                onClick={() => setSelectedPeripheral(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-mars-red transition-all duration-300"
                aria-label="Закрыть"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Контент модалки */}
              <div className="grid md:grid-cols-2">
                {/* Картинка */}
                <div className="relative aspect-square md:aspect-auto md:h-[60vh] bg-black flex items-center justify-center">
                  {selectedPeripheral.img ? (
                    <img
                      src={selectedPeripheral.img}
                      alt={selectedPeripheral.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-white/20 font-mono text-sm">Изображение отсутствует</span>
                  )}
                </div>

                {/* Описание */}
                <div className="p-8 flex flex-col justify-center bg-[#0a0a0c]">
                  <div className="text-[11px] font-mono text-mars-red tracking-widest uppercase mb-2">
                    {selectedPeripheral.id}
                  </div>
                  <h3 className="text-2xl font-display text-white mb-4">
                    {selectedPeripheral.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {selectedPeripheral.description}. Наши специалисты подобрали это оборудование с особым вниманием к деталям, чтобы обеспечить вам максимальный комфорт и производительность.
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-[#1f1f23]">
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Доступно в каждом номере
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
