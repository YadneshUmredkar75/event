export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  followers: number;
  topSongs: string[];
  upcomingEvents: number;
}

export const artistsData: Artist[] = [
  {
    id: "a1",
    name: "The Neon Lights",
    genre: "Synthwave",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    bio: "Pioneering the synthwave revival with electrifying performances.",
    followers: 250000,
    topSongs: ["Neon Horizon", "Digital Dreams", "Retro Future"],
    upcomingEvents: 5,
  },
  {
    id: "a2",
    name: "DJ Luna",
    genre: "Electronic",
    image: "https://images.unsplash.com/photo-1514307261839-d5b2a2fae038?w=300&h=300&fit=crop",
    bio: "House, techno, and deep house maestro.",
    followers: 180000,
    topSongs: ["Electric Sunrise", "Deep Vibes", "Midnight Pulse"],
    upcomingEvents: 8,
  },
  {
    id: "a3",
    name: "The Indie Collective",
    genre: "Indie Rock",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    bio: "Emerging indie rock bands with raw talent.",
    followers: 95000,
    topSongs: ["Guitar Dreams", "Lost in Time", "City Lights"],
    upcomingEvents: 3,
  },
  {
    id: "a4",
    name: "The Blue Notes",
    genre: "Jazz",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop",
    bio: "Classic jazz with modern sensibilities.",
    followers: 142000,
    topSongs: ["Blue Horizon", "Midnight Blues", "Jazz Dreams"],
    upcomingEvents: 4,
  },
  {
    id: "a5",
    name: "Alex Rivera",
    genre: "Pop",
    image: "https://images.unsplash.com/photo-1514306688772-aae0a126643f?w=300&h=300&fit=crop",
    bio: "Latin pop sensation taking the world by storm.",
    followers: 520000,
    topSongs: ["Fire Soul", "Rhythm of Life", "Tropical Nights"],
    upcomingEvents: 12,
  },
];
