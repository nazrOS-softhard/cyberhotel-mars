import SmartImage from '../components/SmartImage';

const queries = [
  'cyberpunk hotel corridor neon red',
  'gaming lounge sofas dark red',
  'gaming pc setup close up rgb',
  'hotel reception desk dark futuristic',
  'esports arena crowd red lighting',
  'capsule bed neon red interior',
];

export default function Gallery() {
  return (
    <div className="container-mars py-16">
      <h1 className="text-3xl font-display mb-2">ГАЛЕРЕЯ</h1>
      <p className="text-white/50 mb-10">Атмосфера, которую стоит увидеть</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {queries.map((q, i) => (
          <SmartImage
            key={q}
            query={q}
            alt={`МАРС — фото ${i + 1}`}
            seed={i}
            className="w-full h-56 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
