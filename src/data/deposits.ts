export interface DepositTier {
  id: 'week' | 'month' | 'year';
  title: string;
  period: string;
  pricePerNight: number;
  discountPercent: number;
  bonusPoints: number;
  perks: string[];
  highlight?: boolean;
}

/**
 * Логика: чем длиннее депозит (предоплата), тем ниже цена за сутки
 * и тем больше бонусов/привилегий. Оплата — единоразовый депозит
 * на весь срок, доступ выдаётся через личный QR-код (без стойки ресепшена).
 */
export const depositTiers: DepositTier[] = [
  {
    id: 'week',
    title: 'Депозит на неделю',
    period: '7 суток',
    pricePerNight: 1400,
    discountPercent: 5,
    bonusPoints: 50,
    perks: [
      'Скидка 5% от базового тарифа',
      'Бесконтактный доступ по QR-коду',
      '50 бонусных очков на счёт',
    ],
  },
  {
    id: 'month',
    title: 'Депозит на месяц',
    period: '30 суток',
    pricePerNight: 1250,
    discountPercent: 12,
    bonusPoints: 300,
    perks: [
      'Скидка 12% от базового тарифа',
      'Фиксация цены на весь срок',
      'Приоритетная бронь капсулы/номера',
      '300 бонусных очков на счёт',
      'Скидка 10% на рационы Fitness Food Factory',
    ],
    highlight: true,
  },
  {
    id: 'year',
    title: 'Депозит на год',
    period: '365 суток',
    pricePerNight: 950,
    discountPercent: 25,
    bonusPoints: 4000,
    perks: [
      'Скидка 25% от базового тарифа',
      'Безлимитный доступ к игровому модулю премиум-класса',
      'Личный шкаф для оборудования',
      'Бесплатный вход на все турниры',
      '1 рацион Fitness Food Factory в день включён',
      '4000 бонусных очков на счёт',
    ],
  },
];
