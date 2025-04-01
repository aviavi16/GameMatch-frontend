// src/components/GameList.tsx
import { useEffect, useState } from 'react';
import GameRow from './GameRow';
import terraformingImg from '../assets/images/tm.jfif';
import wingspanImg from '../assets/images/wingspan.avif';

interface Game {
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  isFake?: boolean;
}

const fakeGames: Game[] = [
  {
    name: 'Terraforming Mars',
    description: '...',
    imageUrl: terraformingImg,
    createdAt: '01/04/2025, 12:00',
    isFake: true,
  },
  {
    name: 'Wingspan',
    description: '...',
    imageUrl: wingspanImg,
    createdAt: '01/04/2025, 12:05',
    isFake: true,
  },
];

export default function GameList() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const API_BASE =
          import.meta.env.MODE === 'development'
            ? 'http://localhost:3030'
            : 'https://game-store-backend-nzq4.onrender.com';

        const res = await fetch(`${API_BASE}/api/game/all`);
        const realGames = await res.json();  
        const extendedGames = realGames.length > 0 ? realGames : fakeGames;
    
        setGames(extendedGames);
      } catch (err) {
        console.error('❌ Failed to fetch games:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  if (loading) return <p className="text-gray-500 dark:text-gray-400">Loading games...</p>;
  if (games.length === 0) return <p className="text-red-500">No games found.</p>;

  return (
    <div className="space-y-6">
      {games.map((game, idx) => (
        <GameRow key={idx} game={game} />
      ))}
    </div>
  );
}
