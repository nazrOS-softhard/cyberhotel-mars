import SmartImage from '../components/SmartImage';

const specs = [
  { title: 'ПК 4090 / 4080', desc: 'Высокая производительность и стабильный FPS' },
  { title: 'Монитор 27" 240 Гц', desc: 'Плавный геймплей и чёткая картинка' },
  { title: 'Механические клавиатуры', desc: 'Скорость и точность' },
  { title: 'Игровые кресла', desc: 'Комфорт на длинные сессии' },
  { title: 'Премиум периферия', desc: 'Мышь, гарнитура, коврик' },
];

export default function GamingModule() {
  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">ИГРОВОЙ МОДУЛЬ</h1>
      <p className="text-white/50 mb-10">Топовое оборудование. Без компромиссов.</p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <SmartImage
          query="high end gaming pc setup rgb dark room"
          alt="Игровой модуль МАРС"
          className="rounded-md w-full h-96 object-cover"
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
        {['Игровой ПК', 'Монитор 27" 240Гц', 'Наушники', 'Клавиатура', 'Мышь'].map((item, i) => (
          <div key={item} className="card-mars p-4 text-center">
            <SmartImage
              query={`gaming peripheral ${item}`}
              alt={item}
              seed={i}
              className="w-full h-20 object-cover rounded-sm mb-2 opacity-80"
            />
            <div className="text-xs text-white/70">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
