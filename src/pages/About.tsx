import SmartImage from '../components/SmartImage';

const stats = [
  { value: '2023', label: 'Год основания' },
  { value: '24/7', label: 'Работаем' },
  { value: '1000+', label: 'Гостей' },
];

export default function About() {
  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">О НАС</h1>
      <p className="text-white/50 mb-10">МАРС — это больше, чем отель</p>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div>
          <p className="text-white/70 mb-6">
            Мы создали кибер-отель МАРС, чтобы объединить технологии и игровое
            сообщество. Наше пространство создано для тех, кто ценит свободу,
            развитие и новые впечатления.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl font-display text-mars-red">{s.value}</div>
                <div className="text-xs text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="card-mars p-5">
            <div className="font-display text-sm mb-1">Наша миссия</div>
            <p className="text-white/60 text-sm">
              Дать геймерам, стримерам и всем, кто живёт в цифровом мире,
              комфортное пространство для отдыха, игры и развития.
            </p>
          </div>
        </div>
        <SmartImage
          query="futuristic hotel building night neon exterior"
          alt="МАРС снаружи"
          className="rounded-md w-full h-80 object-cover"
        />
      </div>
    </div>
  );
}
