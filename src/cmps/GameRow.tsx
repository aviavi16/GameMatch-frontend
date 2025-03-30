// src/components/GameRow.tsx
interface Game {
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
  }
  
  export default function GameRow({ game }: { game: Game }) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <img
          src={game.imageUrl}
          alt={game.name}
          className="w-full sm:w-40 h-32 object-cover rounded-md shadow-sm"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{game.name}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{game.description}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Added: {game.createdAt}</p>
        </div>
      </div>
    );
  }
  