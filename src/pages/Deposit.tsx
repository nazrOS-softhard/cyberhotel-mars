import { useState } from 'react';
import { depositTiers } from '../data/deposits';
import QRCheckIn from '../components/QRCheckIn';

export default function Deposit() {
  const [selected, setSelected] = useState(depositTiers[1].id);
  const tier = depositTiers.find((t) => t.id === selected)!;

  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">ДЕПОЗИТ И ДОСТУП</h1>
      <p className="text-white/50 mb-10 max-w-xl">
        Вместо оплаты за каждые сутки — вносишь депозит на выбранный срок.
        Чем длиннее срок, тем ниже цена за сутки и больше бонусов. Доступ в
        сектор — по личному QR-коду, без стойки администратора.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {depositTiers.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t.id)}
            className={`text-left card-mars p-6 transition-colors ${
              selected === t.id ? 'border-mars-red' : 'hover:border-white/30'
            } ${t.highlight ? 'relative' : ''}`}
          >
            {t.highlight && (
              <span className="absolute -top-3 left-6 bg-mars-red text-black text-[10px] font-semibold px-2 py-1 rounded-sm">
                ПОПУЛЯРНЫЙ
              </span>
            )}
            <div className="font-display text-lg mb-1">{t.title}</div>
            <div className="text-white/40 text-xs mb-4">{t.period}</div>
            <div className="text-2xl font-display text-mars-red mb-1">
              {t.pricePerNight.toLocaleString('ru-RU')} ₽
            </div>
            <div className="text-white/40 text-xs mb-4">за сутки при депозите</div>
            <div className="text-fff-green text-xs mb-4">−{t.discountPercent}% к базовому тарифу</div>
            <ul className="space-y-2">
              {t.perks.map((p) => (
                <li key={p} className="text-white/60 text-xs flex gap-2">
                  <span className="text-mars-red">•</span>{p}
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="card-mars p-6">
          <h3 className="font-display text-sm mb-4">Как это работает</h3>
          <ol className="space-y-3 text-white/60 text-sm list-decimal list-inside">
            <li>Выбираешь срок депозита — неделя, месяц или год.</li>
            <li>Оплачиваешь депозит целиком (карта, СБП или криптоперевод).</li>
            <li>На почту/в личный кабинет приходит персональный QR-код.</li>
            <li>На входе в сектор подносишь QR к считывателю — турникет открывается.</li>
            <li>Заселяешься в закреплённое место без участия администратора.</li>
          </ol>
        </div>

        <QRCheckIn tierId={tier.id} />
      </div>
    </div>
  );
}
