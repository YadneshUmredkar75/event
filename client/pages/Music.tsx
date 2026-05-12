import { useState } from "react";
import { Music, Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { songsData } from "@/data/songsData";
import { artistsData } from "@/data/artistsData";

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIdx, setCurrentSongIdx] = useState(0);
  const [likedSongs, setLikedSongs] = useState<string[]>([]);

  const currentSong = songsData[currentSongIdx];

  const toggleLike = (songId: string) => {
    setLikedSongs((prev) =>
      prev.includes(songId) ? prev.filter((id) => id !== songId) : [...prev, songId]
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">
              Discover <span className="gradient-text">Music</span>
            </h1>
            <p className="text-xl text-gray-400">
              Listen to trending songs and concert previews
            </p>
          </div>
        </section>

        {/* Music Player */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="glassmorphism rounded-2xl p-6">
              {/* Now Playing */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 border-purple-500/30">
                  <img
                    src={currentSong.image}
                    alt={currentSong.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400 text-sm mb-1">Now Playing</p>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {currentSong.title}
                  </h3>
                  <p className="text-gray-300">{currentSong.artist}</p>
                </div>
                <button
                  onClick={() => toggleLike(currentSong.id)}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    likedSongs.includes(currentSong.id)
                      ? "bg-pink-600 text-white"
                      : "bg-white/10 text-pink-400 hover:bg-white/20"
                  }`}
                >
                  <Heart size={20} fill={likedSongs.includes(currentSong.id) ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-gray-400">2:15</span>
                  <div className="flex-1 h-1 bg-white/10 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{currentSong.duration}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <button className="p-3 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300">
                  <SkipBack size={20} />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white transition-all duration-300"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={() =>
                    setCurrentSongIdx((i) => (i + 1) % songsData.length)
                  }
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <SkipForward size={20} />
                </button>
                <div className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
                  <Volume2 size={18} className="text-gray-400" />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="70"
                    className="w-20 accent-purple-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Songs */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
              🔥 Trending <span className="gradient-text">Songs</span>
            </h2>

            <div className="space-y-3">
              {songsData.map((song, idx) => (
                <div
                  key={song.id}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-purple-500/50"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <img
                    src={song.image}
                    alt={song.title}
                    className="flex-shrink-0 w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                      {song.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {song.artist} • {song.album}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">
                      {(song.plays / 1000000).toFixed(1)}M plays
                    </span>
                    <button
                      onClick={() => toggleLike(song.id)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        likedSongs.includes(song.id)
                          ? "bg-pink-600 text-white"
                          : "bg-white/10 text-pink-400 hover:bg-white/20"
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={likedSongs.includes(song.id) ? "currentColor" : "none"}
                      />
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-purple-600/50 text-white text-sm transition-all duration-300">
                      ▶ Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Playlists */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              Concert <span className="gradient-text">Playlists</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Summer Vibes",
                  description: "Electronic hits for the season",
                  color: "from-orange-500 to-yellow-500",
                  songs: 24,
                },
                {
                  title: "Indie Dreams",
                  description: "Alternative rock classics",
                  color: "from-pink-500 to-purple-500",
                  songs: 18,
                },
                {
                  title: "Jazz Night",
                  description: "Smooth jazz essentials",
                  color: "from-blue-500 to-cyan-500",
                  songs: 15,
                },
                {
                  title: "Tech Vibes",
                  description: "Modern electronic music",
                  color: "from-green-500 to-emerald-500",
                  songs: 21,
                },
              ].map((playlist, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${playlist.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${playlist.color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      🎵
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {playlist.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {playlist.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {playlist.songs} songs
                      </span>
                      <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white text-xs font-semibold transition-all duration-300">
                        Play
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Artists */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              Featured <span className="gradient-text">Artists</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {artistsData.map((artist) => (
                <div
                  key={artist.id}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500/50 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-white font-bold mb-1 group-hover:text-purple-400 transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-purple-400 text-sm font-semibold mb-3">
                    {artist.genre}
                  </p>

                  <button className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white text-sm font-semibold transition-all duration-300">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="glassmorphism rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {songsData.length}+
                </div>
                <p className="text-gray-400">Trending Songs</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {(songsData.reduce((sum, s) => sum + s.plays, 0) / 1000000000).toFixed(1)}B+
                </div>
                <p className="text-gray-400">Total Plays</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {artistsData.length}+
                </div>
                <p className="text-gray-400">Top Artists</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  4+
                </div>
                <p className="text-gray-400">Concert Playlists</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
