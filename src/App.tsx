import Layout from './cmps/Layout';
import GameList from './cmps/GameList';

export default function App() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">🎮 Board Game Encyclopedia</h1>
      <GameList />
    </Layout>
  );
}