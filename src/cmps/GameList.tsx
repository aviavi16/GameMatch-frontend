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
}

const fakeGames: Game[] = [
    {
        name: 'Terraforming Mars',
        description: 'In the 2400s, mankind begins to terraform the planet Mars...',
        imageUrl: terraformingImg,
        createdAt: '27/03/2025, 14:32',
      },
      {
        name: 'Wingspan',
        description: 'A card-driven engine-building board game about birds...',
        imageUrl: wingspanImg,
        createdAt: '28/03/2025, 10:15',
    },
    {
      name: 'Codenames',
      description:
        'Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their codenames. Teams compete to see who can make contact with all of their agents first.',
      imageUrl: 'https://source.unsplash.com/featured/?spies,boardgame',
      createdAt: '29/03/2025, 18:45',
    },
    {
      name: 'Gloomhaven',
      description:
        'A game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world.',
      imageUrl: 'https://source.unsplash.com/featured/?fantasy,boardgame',
      createdAt: '30/03/2025, 21:12',
    },
  ];  

export default function GameList() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://game-store-backend-nzq4.onrender.com/api/game/all');
        const realGames = await res.json();
    
        const extendedGames =
          realGames.length < 3
            ? [...realGames, ...fakeGames.slice(0, 3 - realGames.length)]
            : realGames;
    
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
