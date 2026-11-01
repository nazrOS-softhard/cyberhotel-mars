import { Link } from 'react-router-dom';

// Данные услуг с привязкой к вашим реальным картинкам из папки public
const servicesData = [
  {
    id: 'cybersport',
    title: 'Киберспорт',
    description: 'Соревнования, турниры, ивенты.',
    image: '/uslug_PC.png', 
  },
  {
    id: 'stream-studio',
    title: 'Стрим-студия',
    description: 'Запись и трансляции высокого качества.',
    image: '/uslug_live.png', 
  },
  {
    id: 'lounge',
    title: 'Зона отдыха',
    description: 'Кафе, лаунж, настольные игры.',
    image: '/uslug_otdih.png', 
  },
  {
    id: 'pc-rent',
    title: 'Прокат ПК',
    description: 'Игровые станции на время.',
    image: '/uslug_boot.png', 
  },
  {
    id: 'storage',
    title: 'Хранение',
    description: 'Безопасное хранение оборудования.',
    image: '/uslug_save.png', 
  },
  {
    id: 'additional',
    title: 'Доп. услуги',
    description: 'Консьерж, трансфер, прачечная и другое.',
    image: '/uslug_host.png', 
  },
];

export default function Services() {
  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">УСЛУГИ</h1>
      <p className="text-white/50 mb-10">Больше, чем просто отель</p>

      {/* Сетка услуг */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {servicesData.map((s) => (
          <Link
            to={`/services/${s.id}`}
            key={s.id}
            className="card-mars overflow-hidden flex flex-col group cursor-pointer hover:border-mars-red/50 transition-colors duration-300"
          >
            {/* Картинка с эффектом при наведении */}
            <div className="w-full h-48 bg-mars-line overflow-hidden relative">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Текст */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="font-display text-sm mb-1 text-white group-hover:text-mars-red transition-colors">
                {s.title}
              </div>
              <div className="text-white/50 text-xs">
                {s.description}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Блок с турнирами */}
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
