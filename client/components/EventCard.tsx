import { Link } from "react-router-dom";
import { Star, MapPin, Clock, Ticket } from "lucide-react";
import { Event } from "@/data/eventsData";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link to={`/event/${event.id}`}>
      <div className="event-card h-full">
        <div className="relative overflow-hidden h-64 bg-gradient-to-br from-purple-900 to-blue-900">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/90 text-white backdrop-blur-sm">
              {event.category}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-lg backdrop-blur-sm">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-white font-semibold">{event.rating}</span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-purple-400 transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4">{event.artist}</p>

          <div className="space-y-2 text-sm text-gray-300 mb-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-purple-400" />
              <span className="line-clamp-1">
                {event.area}, {event.city}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-blue-400" />
              <span>{event.date}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-1">
              <Ticket size={16} className="text-green-400" />
              <span className="text-green-400 font-bold">
                ₹{event.price}
              </span>
            </div>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white text-sm font-medium transition-all duration-300 group-hover:brightness-110">
              Explore
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
