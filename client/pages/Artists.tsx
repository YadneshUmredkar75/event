import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Music, Calendar, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { artistsData } from "@/data/artistsData";
import { eventsData } from "@/data/eventsData";

export default function Artists() {
  const [selectedArtist, setSelectedArtist] = useState(artistsData[0]);

  const artistEvents = eventsData.filter(
    (event) => event.artist === selectedArtist.name
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">
              Discover <span className="gradient-text">Artists</span>
            </h1>
            <p className="text-xl text-gray-400">
              Explore amazing musicians and performers
            </p>
          </div>
        </section>

        {/* Featured Artist Detail Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Artist Profile Card */}
              <div className="lg:col-span-1">
                <div className="glassmorphism rounded-3xl p-8 text-center sticky top-24">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-purple-500/30">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedArtist.name}
                  </h2>
                  <p className="text-purple-400 font-semibold mb-4">
                    {selectedArtist.genre}
                  </p>

                  <div className="space-y-3 text-left mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Users size={18} className="text-blue-400" />
                      <span>
                        {selectedArtist.followers.toLocaleString()} followers
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar size={18} className="text-pink-400" />
                      <span>{selectedArtist.upcomingEvents} upcoming events</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-6">{selectedArtist.bio}</p>

                  <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold transition-all duration-300">
                    Follow Artist
                  </button>
                </div>
              </div>

              {/* Artist Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Top Songs */}
                <div className="glassmorphism rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Music size={24} className="text-purple-400" />
                    Top Songs
                  </h3>

                  <div className="space-y-3">
                    {selectedArtist.topSongs.map((song, idx) => (
                      <div
                        key={idx}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-purple-500/50"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                            {song}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {selectedArtist.name}
                          </p>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-purple-600/50 text-white text-sm transition-all duration-300">
                          ▶ Play
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div className="glassmorphism rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Calendar size={24} className="text-pink-400" />
                    Upcoming Events
                  </h3>

                  {artistEvents.length > 0 ? (
                    <div className="space-y-3">
                      {artistEvents.map((event) => (
                        <Link key={event.id} to={`/event/${event.id}`}>
                          <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="flex-shrink-0 w-20 h-20 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                                {event.title}
                              </h4>
                              <p className="text-gray-400 text-sm mb-1">
                                {event.date} at {event.time}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {event.venue}, {event.city}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-green-400 font-bold">
                                ₹{event.price}
                              </p>
                              <button className="mt-2 px-4 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50">
                                Get Tickets
                              </button>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400">
                      No upcoming events at this time.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* All Artists Grid */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Browse All <span className="gradient-text">Artists</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {artistsData.map((artist) => (
                  <button
                    key={artist.id}
                    onClick={() => setSelectedArtist(artist)}
                    className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                      selectedArtist.id === artist.id
                        ? "ring-2 ring-purple-500 bg-gradient-to-br from-purple-900/40 to-blue-900/40"
                        : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50"
                    }`}
                  >
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-500/50">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-white font-bold mb-1 line-clamp-2">
                        {artist.name}
                      </h3>
                      <p className="text-purple-400 text-sm font-semibold mb-2">
                        {artist.genre}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {artist.followers.toLocaleString()} followers
                      </p>
                    </div>

                    {selectedArtist.id === artist.id && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-transparent mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="glassmorphism rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {artistsData.length}+
                </div>
                <p className="text-gray-400">Featured Artists</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {artistsData.reduce((sum, a) => sum + a.followers, 0) / 1000000}M+
                </div>
                <p className="text-gray-400">Total Followers</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {artistsData.reduce((sum, a) => sum + a.upcomingEvents, 0)}+
                </div>
                <p className="text-gray-400">Upcoming Events</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {Math.max(...artistsData.map((a) => a.topSongs.length))}+
                </div>
                <p className="text-gray-400">Top Songs</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
