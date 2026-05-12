import { CheckCircle, Users, Zap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="gradient-text">EventFinder</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionizing how people discover, explore, and experience events
              around the world.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-gray-300 text-lg mb-4">
                  EventFinder is dedicated to connecting people with unforgettable
                  experiences. We believe that every event tells a story, and
                  everyone deserves to find the perfect one.
                </p>
                <p className="text-gray-300 text-lg mb-8">
                  From music concerts and tech conferences to food festivals and
                  cultural celebrations, we make event discovery effortless,
                  engaging, and exciting.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold transition-all duration-300">
                    Join Us
                  </button>
                  <button className="px-8 py-3 rounded-lg border border-purple-500/50 text-white font-semibold hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative glassmorphism rounded-3xl p-12 text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Connecting Passion
                  </h3>
                  <p className="text-gray-300">
                    We connect passionate people with the events they love
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose <span className="gradient-text">EventFinder</span>
              </h2>
              <p className="text-gray-400">
                Premium features designed for event enthusiasts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🔍",
                  title: "Smart Discovery",
                  description: "Find events by city, area, and category with advanced filters",
                },
                {
                  icon: "🎵",
                  title: "Music Integration",
                  description: "Listen to previews and explore artist details instantly",
                },
                {
                  icon: "✨",
                  title: "Beautiful Design",
                  description: "Modern UI with smooth animations and glassmorphism",
                },
                {
                  icon: "📱",
                  title: "Mobile Friendly",
                  description: "Seamless experience on all devices and screen sizes",
                },
                {
                  icon: "🌍",
                  title: "Global Coverage",
                  description: "Discover events happening worldwide in real-time",
                },
                {
                  icon: "⭐",
                  title: "Ratings & Reviews",
                  description: "See ratings and get community feedback on events",
                },
                {
                  icon: "🎟️",
                  title: "Easy Booking",
                  description: "Quick access to tickets and event information",
                },
                {
                  icon: "🔔",
                  title: "Smart Alerts",
                  description: "Get notified about events matching your interests",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="glassmorphism rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="glassmorphism rounded-2xl p-8 text-center group">
                <div className="text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  12+
                </div>
                <p className="text-gray-400 text-lg">Events Listed</p>
                <p className="text-gray-500 text-sm mt-2">Updated daily</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center group">
                <div className="text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <p className="text-gray-400 text-lg">Cities Covered</p>
                <p className="text-gray-500 text-sm mt-2">Worldwide reach</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center group">
                <div className="text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  11
                </div>
                <p className="text-gray-400 text-lg">Event Categories</p>
                <p className="text-gray-500 text-sm mt-2">All interests</p>
              </div>
              <div className="glassmorphism rounded-2xl p-8 text-center group">
                <div className="text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  100%
                </div>
                <p className="text-gray-400 text-lg">User Satisfaction</p>
                <p className="text-gray-500 text-sm mt-2">Community driven</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-gray-400">
                Passionate professionals dedicated to your event experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Alex Johnson", role: "Founder & CEO", emoji: "👨‍💼" },
                { name: "Sarah Chen", role: "CTO", emoji: "👩‍💻" },
                { name: "Marcus Lee", role: "Product Lead", emoji: "👨‍🎨" },
                { name: "Emma Wilson", role: "Community Manager", emoji: "👩‍🤝‍👨" },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="glassmorphism rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-sm font-semibold">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Our <span className="gradient-text">Core Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <CheckCircle size={32} />,
                  title: "Passion",
                  description:
                    "We're passionate about connecting people with experiences they love",
                },
                {
                  icon: <Users size={32} />,
                  title: "Community",
                  description:
                    "Building a strong community of event enthusiasts worldwide",
                },
                {
                  icon: <Zap size={32} />,
                  title: "Innovation",
                  description:
                    "Constantly pushing boundaries with cutting-edge technology",
                },
                {
                  icon: <Globe size={32} />,
                  title: "Accessibility",
                  description:
                    "Making events discoverable for everyone, everywhere",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="glassmorphism rounded-2xl p-8 flex gap-6 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/20 glassmorphism text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Join the Community?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Start discovering amazing events today and become part of our
                growing community.
              </p>

              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-bold transition-all duration-300 text-lg">
                Explore Events Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
