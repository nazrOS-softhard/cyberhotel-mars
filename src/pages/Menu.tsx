const menuItems = [
  {
    id: 1,
    time: 'ЗАВТРАК',
    title: 'Овсяная каша с ягодами и орехами',
    description: 'Овсяная каша на растительном молоке, свежие ягоды, орехи, семена чиа.',
    calories: '520 ккал',
    image: '/rac_1.jpg',
  },
  {
    id: 2,
    time: 'ОБЕД',
    title: 'Боул с киноа, авокадо и овощами',
    description: 'Киноа, авокадо, свежие овощи, нут, зелень, лимонный соус.',
    calories: '680 ккал',
    image: '/rac_2.jpg',
  },
  {
    id: 3,
    time: 'УЖИН',
    title: 'Булгур с курицей, яйцом пашот и зеленью',
    description: 'Рассыпчатый булгур, куриное филе гриль, яйцо пашот, свежая зелень, томаты черри.',
    calories: '520 ккал',
    image: '/rac_6.jpg',
  },
];

export default function Menu() {
  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">МЕНЮ ПИТАНИЯ</h1>
      <p className="text-white/50 mb-10">Трёхразовое питание для гостей МАРС — совместно с Fitness Food Factory</p>

      <div className="grid md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="card-mars overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-[#0a0a0a]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="text-mars-red font-mono text-[10px] tracking-widest mb-2 uppercase">
                {item.time}
              </div>
              <h3 className="font-display text-lg text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                {item.description}
              </p>
              <div className="text-white/40 text-xs font-mono">
                {item.calories}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card-mars p-5 mt-8 flex items-center gap-4">
        <div className="w-8 h-8 bg-green-500 rounded-sm shrink-0" />
        <div>
          <div className="font-display text-sm text-white">Перекус от спонсора</div>
          <div className="text-white/50 text-sm">Протеиновый батончик Fitness Food Factory (классический)</div>
        </div>
      </div>
    </div>
  );
}
