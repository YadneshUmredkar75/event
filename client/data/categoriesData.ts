export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export const categoriesData: Category[] = [
  {
    id: "c1",
    name: "Music Concerts",
    icon: "🎵",
    color: "from-purple-500 to-pink-500",
    description: "Live music performances",
  },
  {
    id: "c2",
    name: "DJ Nights",
    icon: "🎧",
    color: "from-blue-500 to-cyan-500",
    description: "Electronic music nights",
  },
  {
    id: "c3",
    name: "Live Songs",
    icon: "🎤",
    color: "from-pink-500 to-orange-500",
    description: "Live vocal performances",
  },
  {
    id: "c4",
    name: "Tech Events",
    icon: "💻",
    color: "from-green-500 to-emerald-500",
    description: "Technology conferences",
  },
  {
    id: "c5",
    name: "Startup Meetups",
    icon: "🚀",
    color: "from-orange-500 to-yellow-500",
    description: "Startup networking",
  },
  {
    id: "c6",
    name: "Food Festivals",
    icon: "🍽️",
    color: "from-red-500 to-pink-500",
    description: "Culinary experiences",
  },
  {
    id: "c7",
    name: "Sports Events",
    icon: "⚽",
    color: "from-yellow-500 to-orange-500",
    description: "Athletic competitions",
  },
  {
    id: "c8",
    name: "College Festivals",
    icon: "🎓",
    color: "from-indigo-500 to-purple-500",
    description: "Student celebrations",
  },
  {
    id: "c9",
    name: "Gaming Events",
    icon: "🎮",
    color: "from-cyan-500 to-blue-500",
    description: "Esports tournaments",
  },
  {
    id: "c10",
    name: "Comedy Shows",
    icon: "😂",
    color: "from-yellow-400 to-orange-500",
    description: "Stand-up comedy",
  },
  {
    id: "c11",
    name: "Cultural Events",
    icon: "🎭",
    color: "from-purple-600 to-blue-600",
    description: "Art and culture",
  },
];
