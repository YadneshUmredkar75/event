import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Share2,
  Heart,
  MapPin,
  Clock,
  Users,
  Star,
  ChevronLeft,
  Ticket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { eventsData, Event } from "@/data/eventsData";

export default function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const [isLiked, setIsLiked] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<string | null>(
    null
  );

  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
            <p className="text-gray-400 mb-8">
              Sorry, we couldn't find the event you're looking for.
            </p>
            <Link
              to="/events"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold transition-all duration-300"
            >
              Back to Events
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related events (same category or same artist)
  const relatedEvents = eventsData
    .filter(
      (e) =>
        e.id !== event.id &&
        (e.category === event.category || e.artist === event.artist)
    )
    .slice(0, 4);

  const ticketTypes = [
    { type: "Standard", price: event.price, seats: 500 },
    { type: "Premium", price: Math.round(event.price * 1.5), seats: 200 },
    { type: "VIP", price: Math.round(event.price * 2.5), seats: 50 },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="pt-20 px-4 sm:px-6 lg:px-8 bg-background/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto py-4">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ChevronLeft size={18} />
              Back to Events
            </Link>
          </div>
        </div>

        {/* Event Details Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Event Image & Gallery */}
              <div className="lg:col-span-2">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl mb-6 border-2 border-purple-500/30 bg-black/40">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-sm font-bold bg-purple-600/90 text-white backdrop-blur-sm">
                      {event.category}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 px-3 py-2 rounded-lg backdrop-blur-sm">
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-bold">{event.rating}</span>
                  </div>
                </div>

                {/* Event Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="glassmorphism rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Date</p>
                    <p className="text-white font-bold">{event.date}</p>
                  </div>
                  <div className="glassmorphism rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Time</p>
                    <p className="text-white font-bold">{event.time}</p>
                  </div>
                  <div className="glassmorphism rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-1">Attendees</p>
                    <p className="text-white font-bold">
                      {(event.attendees / 1000).toFixed(0)}K+
                    </p>
                  </div>
                </div>

                {/* Description Section */}
                <div className="glassmorphism rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    About This Event
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <p className="text-gray-400">
                    Join {event.attendees.toLocaleString()} other music
                    enthusiasts for an unforgettable experience with{" "}
                    <span className="text-purple-400 font-semibold">
                      {event.artist}
                    </span>
                    .
                  </p>
                </div>

                {/* Venue Information */}
                <div className="glassmorphism rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <MapPin size={24} className="text-pink-400" />
                    Venue & Location
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-4">
                      <p className="text-gray-400 text-sm mb-1">Venue Name</p>
                      <p className="text-white text-lg font-bold">
                        {event.venue}
                      </p>
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white text-lg">
                        {event.area}, {event.city}
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-gray-300 text-sm">
                        📍 The venue is easily accessible by public transport
                        and has ample parking facilities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Event Schedule */}
                {event.songs && event.songs.length > 0 && (
                  <div className="glassmorphism rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      🎵 Setlist Preview
                    </h3>
                    <div className="space-y-2">
                      {event.songs.map((song, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                        >
                          <span className="text-purple-400 font-bold min-w-6">
                            {idx + 1}.
                          </span>
                          <span className="text-white flex-1">{song}</span>
                          <button className="px-3 py-1 rounded-lg bg-white/10 hover:bg-purple-600/50 text-white text-xs font-semibold transition-all">
                            ▶
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Ticket Booking Panel */}
              <div className="lg:col-span-1">
                {/* Main Event Title */}
                <div className="glassmorphism rounded-2xl p-8 mb-6 sticky top-24">
                  <h1 className="text-3xl font-bold text-white mb-4">
                    {event.title}
                  </h1>
                  <div className="flex items-center gap-2 mb-6">
                    <p className="text-purple-400 text-lg font-semibold">
                      by {event.artist}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-6">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-all duration-300 ${
                        isLiked
                          ? "bg-pink-600 text-white"
                          : "bg-white/10 text-pink-400 hover:bg-white/20"
                      }`}
                    >
                      <Heart
                        size={20}
                        fill={isLiked ? "currentColor" : "none"}
                      />
                      {isLiked ? "Saved" : "Save"}
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300">
                      <Share2 size={20} />
                      Share
                    </button>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <p className="text-gray-400 text-sm mb-4">
                      Select Ticket Type
                    </p>

                    {/* Ticket Options */}
                    <div className="space-y-3 mb-6">
                      {ticketTypes.map((ticket) => (
                        <button
                          key={ticket.type}
                          onClick={() => setSelectedTicketType(ticket.type)}
                          className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            selectedTicketType === ticket.type
                              ? "border-purple-500 bg-purple-600/20"
                              : "border-white/10 bg-white/5 hover:border-purple-500/50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-white">
                              {ticket.type}
                            </span>
                            <span className="text-green-400 font-bold">
                              ₹{ticket.price.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs">
                            {ticket.seats} seats available
                          </p>
                        </button>
                      ))}
                    </div>

                    {/* Quantity Selector */}
                    {selectedTicketType && (
                      <div className="mb-6">
                        <p className="text-gray-400 text-sm mb-3">
                          Number of Tickets
                        </p>
                        <select className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Ticket" : "Tickets"}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Book Button */}
                    <button className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                      selectedTicketType
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50"
                        : "bg-gray-600 cursor-not-allowed opacity-50"
                    }`}
                    disabled={!selectedTicketType}
                    >
                      <Ticket size={20} />
                      Book Now
                    </button>

                    {!selectedTicketType && (
                      <p className="text-center text-gray-400 text-sm mt-2">
                        Select a ticket type to proceed
                      </p>
                    )}
                  </div>
                </div>

                {/* Event Stats */}
                <div className="glassmorphism rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <Users size={20} className="text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Expected Attendees</p>
                      <p className="text-white font-bold">
                        {event.attendees.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <Clock size={20} className="text-pink-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Duration</p>
                      <p className="text-white font-bold">3-4 Hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star size={20} className="text-yellow-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Rating</p>
                      <p className="text-white font-bold">{event.rating}/5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-transparent border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Related <span className="gradient-text">Events</span>
              </h2>
              <p className="text-gray-400 mb-8">
                {relatedEvents.length > 1
                  ? "You might also like these events"
                  : "Check out this similar event"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedEvents.map((relatedEvent) => (
                  <EventCard key={relatedEvent.id} event={relatedEvent} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recommended Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Similar <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Explore more events in the same category
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventsData
                .filter((e) => e.category === event.category && e.id !== event.id)
                .slice(0, 4)
                .map((relatedEvent) => (
                  <EventCard key={relatedEvent.id} event={relatedEvent} />
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
