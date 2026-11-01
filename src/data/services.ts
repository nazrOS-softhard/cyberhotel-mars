export interface Service {
  id: string;
  title: string;
  description: string;
  imageQuery: string;
  image: string; // Добавили поле для реальной картинки
  detail: string;
  hasStream?: boolean;
}

export const services: Service[] = [
  {
    id: 'esports',
    title: 'Киберспорт',
    description: 'Соревнования, турниры, ивенты.',
    imageQuery: 'esports tournament arena red lighting',
    image: '/uslug_PC.png', // Привязали вашу картинку с ПК
    detail: 'Регулярные турниры по CS2, Dota 2, Valorant и другим дисциплинам. Прямая трансляция матчей ведётся из сектора турниров — смотри онлайн ниже.',
    hasStream: true,
  },
  {
    id: 'stream',
    title: 'Стрим-студия',
    description: 'Запись и трансляции высокого качества.',
    imageQuery: 'streaming studio setup microphone camera',
    image: '/uslug_live.png', // Привязали картинку стрим-студии
    detail: 'Оборудованная студия для собственных стримов: свет, звук, зелёный фон, капча-карта. Можно арендовать почасово или смотреть текущий эфир.',
    hasStream: true,
  },
  {
    id: 'lounge',
    title: 'Зона отдыха',
    description: 'Кафе, лаунж, настольные игры.',
    imageQuery: 'gaming lounge cafe neon dark',
    image: '/uslug_otdih.png', // Привязали картинку кафе
    detail: 'Место для перерыва между сессиями: кофе, снеки от Fitness Food Factory, настольные игры и диваны.',
  },
  {
    id: 'rental',
    title: 'Прокат ПК',
    description: 'Игровые станции на время.',
    imageQuery: 'gaming pc rig rgb dark room',
    image: '/uslug_boot.png', // Привязали картинку с мониторами/роботом
    detail: 'Почасовая или посуточная аренда игровой станции без проживания — если нужно просто поиграть.',
  },
  {
    id: 'storage',
    title: 'Хранение',
    description: 'Безопасное хранение оборудования.',
    imageQuery: 'storage lockers dark futuristic',
    image: '/uslug_save.png', // Привязали картинку шкафчиков
    detail: 'Закрытые локеры для периферии и личных вещей на весь срок депозита.',
  },
  {
    id: 'extra',
    title: 'Доп. услуги',
    description: 'Консьерж, трансфер, прачечная и другое.',
    imageQuery: 'hotel concierge desk dark modern',
    image: '/uslug_host.png', // Привязали картинку робота-консьержа
    detail: 'Трансфер, прачечная, консьерж-сервис и индивидуальные запросы гостей.',
  },
];
