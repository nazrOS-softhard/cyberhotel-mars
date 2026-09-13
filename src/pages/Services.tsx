import { Link } from 'react-router-dom';
import SmartImage from '../components/SmartImage';
import { services } from '../data/services';

export default function Services() {
  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">УСЛУГИ</h1>
      <p className="text-white/50 mb-10">Больше, чем просто отель</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {services.map((s) => (
          <Link
            to={`/services/${s.id}`}
            key={s.id}
            className="card-mars overflow-hidden block hover:border-mars-red transition-colors"
          >
            <SmartImage query={s.imageQuery} alt={s.title} seed={s.id} className="w-full h-36 object-cover" />
            <div className="p-4">
              <div className="font-display text-sm mb-1">{s.title}</div>
              <div className="text-white/50 text-xs">{s.description}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="card-mars p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
        <div>
          <h3 className="font-display text-lg mb-2">Игровые турниры</h3>
          <p className="text-white/60 text-sm max-w-md">
            Регулярные турниры по популярным дисциплинам с призами. Официальный
            спонсор питания турниров — Fitness Food Factory.
          </p>
        </div>
        <Link to="/partner" className="btn-primary whitespace-nowrap">О партнёре</Link>
      </div>
    </div>
  );
}
