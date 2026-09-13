import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-mars-line mt-24">
      <div className="container-mars py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-xl font-display text-mars-red mb-2">МАРС</div>
          <p className="text-white/50 text-sm max-w-sm">
            Кибер-отель для тех, кто живёт в игре. Играй, отдыхай, побеждай.
          </p>
          <p className="text-white/40 text-xs mt-3">
  📍 Российская Федерация, г. Новодвинск, ул. 50-летия Октября, 46
</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
          <Link to="/rooms" className="hover:text-mars-red">Номера</Link>
          <Link to="/services" className="hover:text-mars-red">Услуги</Link>
          <Link to="/menu" className="hover:text-mars-red">Меню</Link>
          <Link to="/deposit" className="hover:text-mars-red">Депозит и доступ</Link>
          <Link to="/partner" className="hover:text-mars-red">Партнёр FFF</Link>
          <Link to="/contacts" className="hover:text-mars-red">Контакты</Link>
        </nav>
      </div>
      <div className="container-mars pb-8 text-white/30 text-xs">
        © {new Date().getFullYear()} МАРС. Официальный партнёр по питанию — Fitness Food Factory.
      </div>
    </footer>
  );
}
