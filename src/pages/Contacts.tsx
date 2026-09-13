import { FormEvent, useState } from 'react';

export default function Contacts() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: подключить реальный обработчик (API/форма/телеграм-бот)
    setSent(true);
  }

  return (
    <div className="container-mars py-16 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-3xl font-display mb-2">КОНТАКТЫ</h1>
        <p className="text-white/50 mb-8">Свяжитесь с нами</p>

        <ul className="space-y-4 text-white/70 text-sm">
          <li>📍 Москва, ул. Киберская, 13</li>
          <li>📞 +7 (495) 123-45-67</li>
          <li>✉️ hello@mars-hotel.ru</li>
          <li>🕒 Круглосуточно</li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-lg mb-4">Написать нам</h2>
        {sent ? (
          <div className="card-mars p-6 text-white/70 text-sm">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              required
              placeholder="Ваше имя"
              className="bg-mars-panel border border-mars-line rounded-sm px-4 py-3 text-sm outline-none focus:border-mars-red"
            />
            <input
              required
              placeholder="Телефон или email"
              className="bg-mars-panel border border-mars-line rounded-sm px-4 py-3 text-sm outline-none focus:border-mars-red"
            />
            <textarea
              required
              placeholder="Сообщение"
              rows={4}
              className="bg-mars-panel border border-mars-line rounded-sm px-4 py-3 text-sm outline-none focus:border-mars-red"
            />
            <button type="submit" className="btn-primary w-fit">Отправить</button>
          </form>
        )}
      </div>
    </div>
  );
}
