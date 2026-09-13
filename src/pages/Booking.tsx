import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

export default function Booking() {
  const [roomId, setRoomId] = useState(rooms[0].id);
  const [submitted, setSubmitted] = useState(false);
  const room = rooms.find((r) => r.id === roomId)!;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: подключить реальный бэкенд/платёжный шлюз
    setSubmitted(true);
  }

  return (
    <div className="container-mars py-16 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-3xl font-display mb-2">БРОНИРОВАНИЕ</h1>
        <p className="text-white/50 mb-8">Забронируй свой номер прямо сейчас</p>

        {submitted ? (
          <div className="card-mars p-6">
            <p className="text-white/70 text-sm mb-4">
              Заявка принята! Мы подтвердим бронь по указанным контактам.
            </p>
            <p className="text-white/50 text-xs">
              Хочешь платить не за сутки, а внести депозит на неделю/месяц/год
              со скидкой и бесконтактным доступом по QR?
            </p>
            <Link to="/deposit" className="btn-outline text-sm mt-4 inline-flex">
              Смотреть тарифы депозита
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <label className="text-xs text-white/50 flex flex-col gap-1">
                Дата заезда
                <input type="date" required className="bg-mars-panel border border-mars-line rounded-sm px-3 py-2 text-sm outline-none focus:border-mars-red" />
              </label>
              <label className="text-xs text-white/50 flex flex-col gap-1">
                Дата выезда
                <input type="date" required className="bg-mars-panel border border-mars-line rounded-sm px-3 py-2 text-sm outline-none focus:border-mars-red" />
              </label>
            </div>
            <label className="text-xs text-white/50 flex flex-col gap-1">
              Тип номера
              <select
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="bg-mars-panel border border-mars-line rounded-sm px-3 py-2 text-sm outline-none focus:border-mars-red"
              >
                {rooms.map((r) => (
                  <option key={r.id} value={r.id}>{r.name} — от {r.pricePerNight.toLocaleString('ru-RU')} ₽</option>
                ))}
              </select>
            </label>
            <input required placeholder="Имя" className="bg-mars-panel border border-mars-line rounded-sm px-4 py-3 text-sm outline-none focus:border-mars-red" />
            <input required placeholder="Телефон или email" className="bg-mars-panel border border-mars-line rounded-sm px-4 py-3 text-sm outline-none focus:border-mars-red" />
            <button type="submit" className="btn-primary w-fit">Найти номер</button>
          </form>
        )}
      </div>

      <div className="card-mars p-6 h-fit">
        <h3 className="font-display text-sm mb-4">Выбранный номер</h3>
        <div className="text-lg font-display mb-1">{room.name}</div>
        <p className="text-white/50 text-sm mb-4">{room.description}</p>
        <div className="text-mars-red font-display">от {room.pricePerNight.toLocaleString('ru-RU')} ₽ / сутки</div>
      </div>
    </div>
  );
}
