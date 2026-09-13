import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-mars py-32 text-center">
      <div className="text-5xl font-display text-mars-red mb-4">404</div>
      <p className="text-white/60 mb-8">Такой страницы не существует в секторе МАРС.</p>
      <Link to="/" className="btn-primary">На главную</Link>
    </div>
  );
}
