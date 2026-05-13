import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const faqs = [
    {
      question: "How do I book tickets for an event?",
      answer:
        "Simply browse the events page, select your desired event, choose the ticket type and quantity, and click 'Book Now'. You'll be guided through our secure booking process with multiple payment options.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards (Visa, MasterCard, Rupay), Net Banking from all major banks, and Digital Wallets (Amazon Pay, Mobikwik).",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "You can cancel or modify your booking up to 48 hours before the event. Visit your booking confirmation email for cancellation options or contact our support team.",
    },
    {
      question: "How will I receive my e-ticket?",
      answer:
        "Your e-ticket is immediately available for download after booking confirmation. You'll also receive it via email. You can download it anytime from your account or the confirmation screen.",
    },
    {
      question: "What if I have issues with my booking?",
      answer:
        "Our support team is available 24/7. Contact us via email, phone, or live chat. We typically respond to inquiries within 2 hours during business hours.",
    },
    {
      question: "Can I gift tickets to someone else?",
      answer:
        "Yes! You can share your ticket with others. Use the share feature to send the ticket details, or forward the confirmation email. The e-ticket is transferable.",
    },
    {
      question: "Are there discounts for group bookings?",
      answer:
        "For group bookings of 10 or more tickets, please contact our team at group@eventfinder.com for special group rates and packages.",
    },
    {
      question: "Do you have a mobile app?",
      answer:
        "Our mobile app is coming soon! For now, our website is fully responsive and works seamlessly on all devices.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Email */}
              <div className="glassmorphism rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-400 mb-4">We typically reply within 2 hours</p>
                <a
                  href="mailto:support@eventfinder.com"
                  className="text-purple-400 font-semibold hover:text-purple-300 transition-colors break-all"
                >
                  support@eventfinder.com
                </a>
              </div>

              {/* Phone */}
              <div className="glassmorphism rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-400 mb-4">Mon-Fri, 9AM-6PM IST</p>
                <a
                  href="tel:+91-1234567890"
                  className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                >
                  +91 - 1234 - 567 - 890
                </a>
              </div>

              {/* Address */}
              <div className="glassmorphism rounded-2xl p-8 text-center hover:border-pink-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-pink-600/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={32} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-400 mb-4">Visit our office</p>
                <address className="text-pink-400 font-semibold not-italic">
                  123 Event Street<br />
                  Mumbai, India 400001
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-transparent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Send us a <span className="gradient-text">Message</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Fill out the form below and we'll get back to you shortly
            </p>

            <div className="glassmorphism rounded-2xl p-8 border-2 border-purple-500/20">
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-lg bg-green-600/20 border border-green-500/50 flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-green-300 font-semibold">
                      Message sent successfully!
                    </p>
                    <p className="text-green-300/80 text-sm">
                      Thank you for contacting us. We'll reply soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed opacity-50"
                      : "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50"
                  }`}
                >
                  <Send size={20} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Find answers to common questions about our platform
            </p>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full text-left glassmorphism rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare size={16} className="text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                        {faq.question}
                      </h3>
                      {expandedFaq === idx && (
                        <p className="text-gray-300 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                    <div
                      className={`text-purple-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedFaq === idx ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media & Newsletter */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/10 to-transparent border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Social Media */}
              <div className="glassmorphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow Us
                </h3>
                <p className="text-gray-400 mb-6">
                  Stay updated with the latest events and news
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Twitter", icon: "𝕏", color: "hover:bg-gray-600" },
                    {
                      name: "Facebook",
                      icon: "f",
                      color: "hover:bg-blue-600",
                    },
                    {
                      name: "Instagram",
                      icon: "📷",
                      color: "hover:bg-pink-600",
                    },
                    {
                      name: "LinkedIn",
                      icon: "in",
                      color: "hover:bg-blue-700",
                    },
                    {
                      name: "YouTube",
                      icon: "▶",
                      color: "hover:bg-red-600",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className={`w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold transition-all duration-300 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="glassmorphism rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Clock size={24} className="text-pink-400" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 mt-3 text-sm">
                    <p>
                      💬 Live chat available 24/7 for urgent inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
