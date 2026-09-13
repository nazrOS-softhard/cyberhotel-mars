import { useMemo, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface Props {
  tierId: string;
  guestName?: string;
}

/**
 * Генерирует токен доступа. В проде токен должен приходить с бэкенда
 * (после подтверждения оплаты депозита) и быть подписан/иметь TTL —
 * здесь показана клиентская демонстрация формата и потока.
 */
function buildAccessToken(tierId: string, guestName: string) {
  const payload = {
    hotel: 'MARS',
    tier: tierId,
    guest: guestName || 'guest',
    issuedAt: Date.now(),
  };
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
}

export default function QRCheckIn({ tierId, guestName }: Props) {
  const [name, setName] = useState(guestName ?? '');
  const [confirmed, setConfirmed] = useState(false);

  const token = useMemo(() => buildAccessToken(tierId, name), [tierId, name]);

  return (
    <div className="card-mars p-6 flex flex-col items-center text-center gap-4">
      <h4 className="font-display text-lg">Бесконтактный доступ</h4>
      <p className="text-white/60 text-sm max-w-xs">
        После оплаты депозита сюда придёт персональный QR-код. Поднеси его к
        считывателю на входе в сектор — турникет откроется, заселение без
        стойки ресепшена и очередей.
      </p>

      {!confirmed ? (
        <div className="w-full flex flex-col gap-3 items-center">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя гостя"
            className="w-full max-w-xs bg-mars-bg border border-mars-line rounded-sm px-3 py-2 text-sm outline-none focus:border-mars-red"
          />
          <button
            onClick={() => setConfirmed(true)}
            disabled={!name.trim()}
            className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Сгенерировать QR-доступ
          </button>
        </div>
      ) : (
        <>
          <div className="bg-white p-3 rounded-sm">
            <QRCodeSVG value={token} size={168} />
          </div>
          <p className="text-white/40 text-xs break-all max-w-xs">
            Тариф: {tierId} · Гость: {name}
          </p>
          <button
            onClick={() => setConfirmed(false)}
            className="text-white/50 text-xs underline underline-offset-2"
          >
            Изменить данные
          </button>
        </>
      )}
    </div>
  );
}
