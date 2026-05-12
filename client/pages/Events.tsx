import { useState, useMemo } from "react";
import { Search, Filter, SortAsc } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { eventsData } from "@/data/eventsData";

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all");
  const [sortBy, setSortBy] = useState<"trending" | "latest" | "popular">("trending");

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = eventsData.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.area.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory
        ? event.category === selectedCategory
        : true;

      const matchesPrice =
        priceFilter === "all"
          ? true
          : priceFilter === "free"
          ? event.price === 0
          : event.price > 0;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort
    if (sortBy === "trending") {
      filtered.sort((a, b) => b.attendees - a.attendees);
    } else if (sortBy === "latest") {
      filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === "popular") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceFilter, sortBy]);

  const categories = Array.from(
    new Set(eventsData.map((event) => event.category))
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-4">
              Discover <span className="gradient-text">Events</span>
            </h1>
            <p className="text-xl text-gray-400">
              Browse and filter from thousands of amazing events
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-purple-400" size={20} />
              <input
                type="text"
                placeholder="Search events, artists, cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
              />
            </div>

            {/* Filter and Sort Controls */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Filter size={16} className="inline mr-2" />
                  Category
                </label>
                <select
                  value={selectedCategory || ""}
                  onChange={(e) =>
                    setSelectedCategory(e.target.value || null)
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Price
                </label>
                <select
                  value={priceFilter}
                  onChange={(e) =>
                    setPriceFilter(e.target.value as "all" | "free" | "paid")
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="all">All Prices</option>
                  <option value="free">Free Events</option>
                  <option value="paid">Paid Events</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <SortAsc size={16} className="inline mr-2" />
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as "trending" | "latest" | "popular")
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="trending">Trending</option>
                  <option value="latest">Latest</option>
                  <option value="popular">Popular (Rating)</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="w-full px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
                  {filteredAndSortedEvents.length} Event
                  {filteredAndSortedEvents.length !== 1 ? "s" : ""} Found
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredAndSortedEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  No Events Found
                </h3>
                <p className="text-gray-400 mb-8">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                    setPriceFilter("all");
                  }}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
