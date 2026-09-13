import { Link } from 'react-router-dom';
import SmartImage from '../components/SmartImage';

const products = [
  { name: 'Isotonic Water Lemon-Lime', desc: 'Изотоник без сахара, электролиты, вкус лимон-лайм.', imageQuery: 'green sports drink bottle lemon lime' },
  { name: 'Isotonic Water Apple-Pear', desc: 'Изотоник без сахара, яблоко-груша.', imageQuery: 'yellow sports drink bottle apple' },
  { name: 'Isotonic Water Cherry-Cranberry', desc: 'Изотоник без сахара, вишня-клюква.', imageQuery: 'red sports drink bottle cherry' },
  { name: 'HAUNT Green Melon', desc: 'Энергетический напиток, ноль сахара, зелёная дыня.', imageQuery: 'green energy drink can neon skull' },
];

const values = [
  { title: 'Энергия и функциональность', icon: '⚡' },
  { title: 'Натуральные ингредиенты', icon: '🌿' },
  { title: 'Поддержка активного образа жизни', icon: '🏋️' },
  { title: 'Технологии и качество', icon: '🧪' },
];

export default function Partner() {
  return (
    <div>
      <section className="bg-fff-black">
        <div className="container-mars py-16">
          <div className="text-fff-green text-xs uppercase tracking-wider mb-3">Официальный партнёр по питанию</div>
          <h1 className="text-3xl font-display mb-4">FITNESS FOOD FACTORY</h1>
         <p className="text-white/60 max-w-xl mb-8">
  Fitness Food Factory — это энергия, технологии и забота о себе.
  Функциональные напитки и продукты для активных людей, которые
  выбирают качество, движение и осознанный образ жизни.{' '}
  
    href="https://fitnessfoodfactory.ru/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-fff-green underline underline-offset-2 hover:text-white"
  >
    fitnessfoodfactory.ru
  </a>
</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {values.map((v) => (
              <div key={v.title} className="border border-white/10 rounded-md p-4 text-center">
                <div className="text-xl mb-2">{v.icon}</div>
                <div className="text-white/60 text-xs">{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-mars py-16">
        <h2 className="text-xl font-display mb-8">Продукция</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {products.map((p) => (
            <div key={p.name} className="card-mars overflow-hidden">
              <SmartImage query={p.imageQuery} alt={p.name} seed={p.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="font-display text-sm mb-1">{p.name}</div>
                <div className="text-white/50 text-xs">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-mars p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <h3 className="font-display text-lg mb-2">Питание для гостей МАРС</h3>
            <p className="text-white/60 text-sm max-w-md">
              Три рациона на выбор — традиционное, халяль, вегетарианское —
              с перекусами и напитками от Fitness Food Factory в каждом.
            </p>
          </div>
          <Link to="/menu" className="btn-primary whitespace-nowrap">Смотреть меню</Link>
        </div>
      </section>
    </div>
  );
}
