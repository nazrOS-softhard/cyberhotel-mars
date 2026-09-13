import { Link } from 'react-router-dom';
import SmartImage from '../components/SmartImage';
import { rooms } from '../data/rooms';

export default function Rooms() {
  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">НОМЕРА</h1>
      <p className="text-white/50 mb-10">Выбери свой формат</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {rooms.map((r) => (
          <div key={r.id} className="card-mars overflow-hidden">
            <SmartImage
              query={r.imageQuery}
              alt={r.name}
              seed={r.id}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="font-display text-lg mb-2">{r.name}</h2>
              <p className="text-white/60 text-sm mb-4">{r.description}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {r.features.map((f) => (
                  <li key={f} className="text-xs border border-mars-line rounded-sm px-2 py-1 text-white/70">
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-mars-red font-display">
                  от {r.pricePerNight.toLocaleString('ru-RU')} ₽ / сутки
                </span>
                <Link to="/booking" className="btn-outline text-sm">Подробнее</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
