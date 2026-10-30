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
  { name: 'Игровой ПК', img: '/gaming-main.png' }, // Или можно поставить специальную картинку для ПК, если есть
  { name: 'Монитор 27" 360Гц', img: '/termo.png' }, // Если termo это монитор. Если нет - скажи, поменяю
  { name: 'Наушники', img: '/ushi.png' },
  { name: 'Клавиатура', img: '/key.png' },
  { name: 'Мышь', img: '/mouse.png' },
];

export default function GamingModule() {
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
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {peripherals.map((item, i) => (
          <div key={item.name} className="card-mars p-4 text-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-20 object-cover rounded-sm mb-2 opacity-80"
            />
            <div className="text-xs text-white/70">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
