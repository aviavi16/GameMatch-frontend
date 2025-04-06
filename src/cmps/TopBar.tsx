// src/components/TopBar.tsx
import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.webp';

export default function TopBar() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDark]);

    return (
      <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo"   className="h-10 w-10 rounded-full shadow-md" />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">🎲 Game Encyclopedia</h1>
        </div>
  
        <nav className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
          <button className="hover:underline">🔔 Messages</button>
          <button className="hover:underline">🧾 Subscriptions</button>
          <button className="hover:underline">➡️ Next Page</button>
                {/* 🔘 כפתור שינוי תמה */}
        {/* הכפתור האחד והיפה לתמה */}
        <button
            onClick={() => setIsDark((prev) => !prev)}
            className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-700 ease-in-out flex items-center gap-2 group"
            >
            <span
                className="inline-block transform transition-transform duration-700 ease-in-out group-hover:rotate-180"
            >
                {isDark ? '🌞' : '🌙'}
            </span>
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>

          <span className="font-semibold text-indigo-600 cursor-pointer">aviavi16 ⬇️</span>
        </nav>
      </header>
    );
  }
  