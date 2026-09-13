export interface Service {
  id: string;
  title: string;
  description: string;
  imageQuery: string;
}

export const services: Service[] = [
  { id: 'esports', title: 'Киберспорт', description: 'Соревнования, турниры, ивенты.', imageQuery: 'esports tournament arena red lighting' },
  { id: 'stream', title: 'Стрим-студия', description: 'Запись и трансляции высокого качества.', imageQuery: 'streaming studio setup microphone camera' },
  { id: 'lounge', title: 'Зона отдыха', description: 'Кафе, лаунж, настольные игры.', imageQuery: 'gaming lounge cafe neon dark' },
  { id: 'rental', title: 'Прокат ПК', description: 'Игровые станции на время.', imageQuery: 'gaming pc rig rgb dark room' },
  { id: 'storage', title: 'Хранение', description: 'Безопасное хранение оборудования.', imageQuery: 'storage lockers dark futuristic' },
  { id: 'extra', title: 'Доп. услуги', description: 'Консьерж, трансфер, прачечная и другое.', imageQuery: 'hotel concierge desk dark modern' },
];
