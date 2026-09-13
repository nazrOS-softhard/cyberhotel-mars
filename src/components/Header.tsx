import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Главная' },
  { to: '/rooms', label: 'Номера' },
  { to: '/gaming', label: 'Игровой модуль' },
  { to: '/services', label: 'Услуги' },
  { to: '/menu', label: 'Меню' },
  { to: '/about', label: 'О нас' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-mars-bg/90 backdrop-blur border-b border-mars-line">
      <div className="container-mars flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-display text-mars-red tracking-wide">
          МАРС
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `hover:text-mars-red transition-colors ${isActive ? 'text-mars-red' : 'text-white/80'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/booking" className="btn-primary text-sm">
            Забронировать
          </Link>
        </div>

        <button
          className="lg:hidden text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden container-mars pb-4 flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-mars-red"
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn-primary text-sm w-fit" onClick={() => setOpen(false)}>
            Забронировать
          </Link>
        </nav>
      )}
    </header>
  );
}
