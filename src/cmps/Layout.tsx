// src/components/Layout.tsx
import { ReactNode } from 'react';
import TopBar from './TopBar';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* 🔝 תפריט עליון */}
      <TopBar />

      {/* 🧱 תוכן הדף */}
      <div className="flex">
        {/* Sidebar קבוע לשמאל */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">🔍 Search</h3>
            <input
              type="text"
              placeholder="Search games..."
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🕵️ Recently Viewed</h3>
            <ul className="text-sm space-y-1">
              <li>Catan</li>
              <li>Root</li>
              <li>Azul</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">🔥 Hot Games</h3>
            <ul className="text-sm space-y-1">
              <li>Gloomhaven</li>
              <li>Brass: Birmingham</li>
              <li>Ark Nova</li>
            </ul>
          </div>
        </aside>

        {/* תוכן פנימי - העמוד עצמו */}
        <main className="flex-1 p-6 max-w-6xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
