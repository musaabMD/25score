import { useState } from 'react';

const themes = {

  peach: {

    primary: "from-pink-50 via-white to-orange-50",

    overlay1: "from-pink-100/30 via-transparent to-orange-100/30",

    overlay2: "from-pink-50/20 via-transparent to-orange-50/20"

  },

  ocean: {

    primary: "from-blue-50 via-white to-cyan-50",

    overlay1: "from-blue-100/30 via-transparent to-cyan-100/30",

    overlay2: "from-blue-50/20 via-transparent to-cyan-50/20"

  },

  forest: {

    primary: "from-green-50 via-white to-emerald-50",

    overlay1: "from-green-100/30 via-transparent to-emerald-100/30",

    overlay2: "from-green-50/20 via-transparent to-emerald-50/20"

  },

  sunset: {

    primary: "from-yellow-50 via-white to-red-50",

    overlay1: "from-yellow-100/30 via-transparent to-red-100/30",

    overlay2: "from-yellow-50/20 via-transparent to-red-50/20"

  },

  lavender: {

    primary: "from-purple-50 via-white to-indigo-50",

    overlay1: "from-purple-100/30 via-transparent to-indigo-100/30",

    overlay2: "from-purple-50/20 via-transparent to-indigo-50/20"

  }

};

const ThemedBackground = () => {

  const [theme, setTheme] = useState('peach');

  const currentTheme = themes[theme];

  return (

    <div className={`min-h-screen w-full bg-gradient-to-b ${currentTheme.primary} relative overflow-hidden`}>

      <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.overlay1}`} />

      <div className={`absolute inset-0 bg-gradient-to-tr ${currentTheme.overlay2}`} />

      <div className="fixed top-4 right-4 flex gap-2">

        {Object.keys(themes).map((themeName) => (

          <button

            key={themeName}

            onClick={() => setTheme(themeName)}

            className="px-3 py-1 rounded-lg bg-white/50 hover:bg-white/80 transition-colors capitalize"

          >

            {themeName}

          </button>

        ))}

      </div>

    </div>

  );

};

export default ThemedBackground;  