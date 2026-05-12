import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import CategoryCard from "@/components/CategoryCard";
import { eventsData } from "@/data/eventsData";
import { categoriesData } from "@/data/categoriesData";

export default function Home() {
  const [searchCity, setSearchCity] = useState("");
  const [searchArea, setSearchArea] = useState("");
  const [searchType, setSearchType] = useState("");

  const trendingEvents = eventsData.slice(0, 4);
  const featuredConcerts = eventsData.slice(4, 8);
  const upcomingEvents = eventsData.slice(0, 6);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated background gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-purple-600/20 border border-purple-500/50 text-purple-300">
              ✨ Discover Amazing Events Near You
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Next{" "}
            <span className="gradient-text">Perfect Event</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore music concerts, tech events, sports, food festivals, and
            more. Discover, book, and enjoy unforgettable experiences.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glassmorphism p-6 rounded-2xl space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-purple-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by city"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-blue-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by area"
                    value={searchArea}
                    onChange={(e) => setSearchArea(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>
                <div className="relative">
                  <Zap className="absolute left-3 top-3 text-pink-400" size={20} />
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">All Event Types</option>
                    <option value="Music Concerts">Music Concerts</option>
                    <option value="DJ Nights">DJ Nights</option>
                    <option value="Live Songs">Live Songs</option>
                    <option value="Tech Events">Tech Events</option>
                    <option value="Startup Meetups">Startup Meetups</option>
                    <option value="Food Festivals">Food Festivals</option>
                    <option value="Sports Events">Sports Events</option>
                  </select>
                </div>
              </div>
              <Link to="/events" className="block">
                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-bold transition-all duration-300 flex items-center justify-center gap-2">
                  <Search size={20} />
                  Search Events
                </button>
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            🔥 Trending: Music Festivals • Tech Summits • Comedy Nights
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Popular <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-gray-400 mb-12">
            Explore events by your favorite categories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoriesData.slice(0, 8).map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={() => console.log("Category selected:", category.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                🔥 Trending <span className="gradient-text">Events</span>
              </h2>
              <p className="text-gray-400">
                Hot events people are talking about right now
              </p>
            </div>
            <Link to="/events">
              <button className="hidden sm:block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold transition-all duration-300">
                View All
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Concerts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                🎵 Featured <span className="gradient-text">Concerts</span>
              </h2>
              <p className="text-gray-400">
                Don't miss these amazing music events
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredConcerts.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            📅 Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-gray-400 mb-12">
            Mark your calendar for these upcoming experiences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/20 glassmorphism">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Never Miss an Event
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Get notified about trending events, concert announcements, and
              exclusive offers straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
              />
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
