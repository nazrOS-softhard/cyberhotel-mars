import { Link } from 'react-router-dom';
import SmartImage from '../components/SmartImage';
import { rooms } from '../data/rooms';

const stats = [
  { value: '24/7', label: 'Доступ' },
  { value: '100+', label: 'Мест' },
  { value: '4.9', label: 'Рейтинг' },
  { value: '10+', label: 'Турниров в год' },
];

export default function Home() {
  return (
    <div>
      <section className="container-mars pt-12 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-display leading-tight mb-4">
            МАРС <span className="text-mars-red">КИБЕР-ОТЕЛЬ</span>
          </h1>
          <p className="text-white/60 mb-8 max-w-md">
            Пространство для тех, кто живёт в игре. Спи, играй, развивайся —
            в одном месте.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/booking" className="btn-primary">Забронировать номер</Link>
            <Link to="/rooms" className="btn-outline">Узнать больше</Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-display text-mars-red">{s.value}</div>
                <div className="text-xs text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <SmartImage
          query="cyberpunk gaming hotel room red neon interior"
          alt="Кибер-отель МАРС"
          className="rounded-md w-full h-80 md:h-[26rem] object-cover"
        />
      </section>

      <section className="container-mars pb-20">
        <h2 className="text-2xl font-display mb-8">Номера</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rooms.map((r) => (
            <Link to="/rooms" key={r.id} className="card-mars overflow-hidden group">
              <SmartImage
                query={r.imageQuery}
                alt={r.name}
                seed={r.id}
                className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity"
              />
              <div className="p-4">
                <div className="font-display text-sm mb-1">{r.name}</div>
                <div className="text-mars-red text-sm">от {r.pricePerNight.toLocaleString('ru-RU')} ₽ / сутки</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-mars pb-24">
        <div className="card-mars p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <h3 className="text-xl font-display mb-2">Депозит вместо суточной оплаты</h3>
            <p className="text-white/60 max-w-md text-sm">
              Внеси депозит на неделю, месяц или год — получи скидку, бонусы
              и вход в сектор по личному QR-коду, без стойки ресепшена.
            </p>
          </div>
          <Link to="/deposit" className="btn-primary whitespace-nowrap">Тарифы депозита</Link>
        </div>
      </section>
    </div>
  );
}
