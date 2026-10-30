const specs = [
  { 
    title: 'Флагманские игровые ПК', 
    desc: 'Производительные процессоры на базе видеокарт NVIDIA GeForce RTX. Максимальная производительность в современных играх и прилах.' 
  },
  { 
    title: 'Мониторы 27″ — до 360 Гц', 
    desc: 'Высокая частота обновления, минимальная задержка и чёткое изображение.' 
  },
  { 
    title: 'Механические клавиатуры', 
    desc: 'Беспроводные с точностью управления.' 
  },
  { 
    title: 'Профессиональные игровые кресла', 
    desc: 'Эргономика и комфорт даже во время длительных игровых сессий.' 
  },
  { 
    title: 'Премиальная периферия', 
    desc: 'Беспроводные игровые мыши, гарнитуры и большие коврики.' 
  },
];

export default function GamingModule() {
  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">ИГРОВОЙ МОДУЛЬ</h1>
      <p className="text-white/50 mb-10">Топовое оборудование. Без компромиссов.</p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* БОЛЬШАЯ КАРТИНКА СЛЕВА */}
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
        {['Игровой ПК', 'Монитор 27" 360Гц', 'Наушники', 'Клавиатура', 'Мышь'].map((item, i) => (
          <div key={item} className="card-mars p-4 text-center">
            {/* ВРЕМЕННАЯ ЗАГЛУШКА (Цветной блок) для маленьких карточек */}
            <div 
              className="w-full h-20 rounded-sm mb-2 opacity-80 flex items-center justify-center"
              style={{ background: `hsl(${i * 60}, 40%, 15%)` }}
            >
              <span className="text-[10px] text-white/30 font-mono px-1 text-center">{item}</span>
            </div>
            <div className="text-xs text-white/70">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
