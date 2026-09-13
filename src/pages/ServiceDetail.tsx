
import { Link, useParams } from 'react-router-dom';
import SmartImage from '../components/SmartImage';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="container-mars py-24 text-center">
        <p className="text-white/60 mb-6">Такая услуга не найдена.</p>
        <Link to="/services" className="btn-primary">К списку услуг</Link>
      </div>
    );
  }

  return (
    <div className="container-mars py-16">
      <Link to="/services" className="text-white/50 text-sm hover:text-mars-red">← Все услуги</Link>

      <h1 className="text-3xl font-display mt-4 mb-2">{service.title.toUpperCase()}</h1>
      <p className="text-white/60 mb-10 max-w-xl">{service.detail}</p>

      <SmartImage
        query={service.imageQuery}
        alt={service.title}
        seed={service.id}
        className="w-full h-64 md:h-80 object-cover rounded-md mb-10"
      />

      {service.hasStream && (
        <div className="card-mars p-6 mb-10">
          <h2 className="font-display text-sm mb-4">Прямая трансляция</h2>
          {/*
            TODO: подставь реальный embed своей трансляции, например Twitch:
            <iframe
              src={`https://player.twitch.tv/?channel=ТВОЙ_КАНАЛ&parent=ТВОЙ_ДОМЕН`}
              height="480" width="100%" allowFullScreen
            />
            Пока — заглушка, чтобы страница была рабочей без привязанного канала.
          */}
          <div className="w-full aspect-video bg-black/60 border border-mars-line rounded-sm flex items-center justify-center text-white/40 text-sm">
            Трансляция скоро начнётся — подключи канал в src/pages/ServiceDetail.tsx
          </div>
        </div>
      )}

      <Link to="/booking" className="btn-primary">Забронировать</Link>
    </div>
  );
}
