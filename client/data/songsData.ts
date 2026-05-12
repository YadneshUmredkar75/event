export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
  previewUrl?: string;
  plays: number;
}

export const songsData: Song[] = [
  {
    id: "s1",
    title: "Neon Horizon",
    artist: "The Neon Lights",
    album: "Synthwave Dreams",
    duration: "3:45",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
    plays: 2500000,
  },
  {
    id: "s2",
    title: "Digital Dreams",
    artist: "The Neon Lights",
    album: "Synthwave Dreams",
    duration: "4:12",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop",
    plays: 1800000,
  },
  {
    id: "s3",
    title: "Electric Sunrise",
    artist: "DJ Luna",
    album: "Electronic Nights",
    duration: "5:20",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop",
    plays: 3200000,
  },
  {
    id: "s4",
    title: "Guitar Dreams",
    artist: "The Indie Collective",
    album: "Indie Rocks",
    duration: "3:58",
    image: "https://images.unsplash.com/photo-1514321918619-0fa2ea2dcc0d?w=200&h=200&fit=crop",
    plays: 950000,
  },
  {
    id: "s5",
    title: "Blue Horizon",
    artist: "The Blue Notes",
    album: "Jazz Classics",
    duration: "4:35",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=200&h=200&fit=crop",
    plays: 1200000,
  },
  {
    id: "s6",
    title: "Fire Soul",
    artist: "Alex Rivera",
    album: "Latin Vibes",
    duration: "3:30",
    image: "https://images.unsplash.com/photo-1514306688772-aae0a126643f?w=200&h=200&fit=crop",
    plays: 4100000,
  },
  {
    id: "s7",
    title: "Midnight Pulse",
    artist: "DJ Luna",
    album: "Electronic Nights",
    duration: "6:15",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop",
    plays: 2700000,
  },
  {
    id: "s8",
    title: "Lost in Time",
    artist: "The Indie Collective",
    album: "Indie Rocks",
    duration: "4:20",
    image: "https://images.unsplash.com/photo-1514321918619-0fa2ea2dcc0d?w=200&h=200&fit=crop",
    plays: 1500000,
  },
];
