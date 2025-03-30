import { useEffect, useState } from 'react';

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="fixed top-4 right-4 px-3 py-2 text-sm font-medium rounded bg-gray-800 text-white dark:bg-white dark:text-black shadow-md z-50"
    >
      {isDark ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
