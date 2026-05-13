import { useState } from "react";
import { X, CheckCircle, Download, Share2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventArtist: string;
  eventDate: string;
  eventTime: string;
  ticketType: string;
  ticketPrice: number;
  quantity: number;
}

type BookingStep = "details" | "payment" | "confirmation";

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface Ticket {
  id: string;
  code: string;
  userName: string;
  ticketType: string;
  quantity: number;
  totalPrice: number;
  eventTitle: string;
  eventDate: string;
  bookingDate: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  eventTitle,
  eventArtist,
  eventDate,
  eventTime,
  ticketType,
  ticketPrice,
  quantity,
}: BookingModalProps) {
  const [step, setStep] = useState<BookingStep>("details");
  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [quantityValue, setQuantityValue] = useState(quantity);

  const totalPrice = ticketPrice * quantityValue;

  const handleDetailsChange = (field: string, value: string) => {
    setUserDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateDetails = () => {
    return (
      userDetails.firstName.trim() &&
      userDetails.lastName.trim() &&
      userDetails.email.includes("@") &&
      userDetails.phone.length >= 10
    );
  };

  const handlePayment = async () => {
    if (!validateDetails()) {
      alert("Please fill all details correctly");
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate ticket
    const ticketCode = `EVT-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;
    const newTicket: Ticket = {
      id: Math.random().toString(36).substring(7),
      code: ticketCode,
      userName: `${userDetails.firstName} ${userDetails.lastName}`,
      ticketType,
      quantity: quantityValue,
      totalPrice,
      eventTitle,
      eventDate,
      bookingDate: new Date().toLocaleDateString("en-IN"),
    };

    setTicket(newTicket);
    setIsProcessing(false);
    setStep("confirmation");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border-2 border-purple-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border-b border-white/10 px-6 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {step === "details"
              ? "Book Your Tickets"
              : step === "payment"
              ? "Payment"
              : "Booking Confirmed"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <X size={24} className="text-gray-400" />
          </button>
        </div>

        <div className="p-8">
          {step === "details" && (
            <div className="space-y-6">
              {/* Event Summary */}
              <div className="glassmorphism rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">
                  {eventTitle}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Artist</p>
                    <p className="text-white font-semibold">{eventArtist}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Date</p>
                    <p className="text-white font-semibold">{eventDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Ticket Type</p>
                    <p className="text-white font-semibold">{ticketType}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Quantity</p>
                    <select
                      value={quantityValue}
                      onChange={(e) => setQuantityValue(Number(e.target.value))}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white mt-1"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* User Details Form */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Your Details</h3>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={userDetails.firstName}
                    onChange={(e) =>
                      handleDetailsChange("firstName", e.target.value)
                    }
                    className="col-span-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={userDetails.lastName}
                    onChange={(e) =>
                      handleDetailsChange("lastName", e.target.value)
                    }
                    className="col-span-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  value={userDetails.email}
                  onChange={(e) => handleDetailsChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={userDetails.phone}
                  onChange={(e) => handleDetailsChange("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />
              </div>

              {/* Price Summary */}
              <div className="border-t border-white/10 pt-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Base Price (₹{ticketPrice})</span>
                    <span>₹{(ticketPrice * quantityValue).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Booking Fee</span>
                    <span>₹{Math.round(totalPrice * 0.05).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-white">
                    <span>Total Amount</span>
                    <span className="text-green-400">
                      ₹{Math.round(totalPrice * 1.05).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white font-semibold transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setStep("payment")}
                  disabled={!validateDetails()}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    validateDetails()
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white"
                      : "bg-gray-600 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {step === "payment" && (
            <div className="space-y-6">
              {/* Payment Methods */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Select Payment Method
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      id: "upi",
                      name: "UPI",
                      description: "Google Pay, PhonePe, Paytm",
                      icon: "📱",
                    },
                    {
                      id: "card",
                      name: "Credit/Debit Card",
                      description: "Visa, MasterCard, Rupay",
                      icon: "💳",
                    },
                    {
                      id: "netbanking",
                      name: "Net Banking",
                      description: "All major banks supported",
                      icon: "🏦",
                    },
                    {
                      id: "wallet",
                      name: "Digital Wallet",
                      description: "Amazon Pay, Mobikwik",
                      icon: "👛",
                    },
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        paymentMethod === method.id
                          ? "border-purple-500 bg-purple-600/20"
                          : "border-white/10 bg-white/5 hover:border-purple-500/50"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{method.icon}</span>
                        <div className="flex-1">
                          <p className="font-bold text-white">{method.name}</p>
                          <p className="text-gray-400 text-sm">
                            {method.description}
                          </p>
                        </div>
                        {paymentMethod === method.id && (
                          <CheckCircle size={20} className="text-green-400" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="glassmorphism rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4">Price Breakdown</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Base Price</span>
                    <span className="text-white">₹{(ticketPrice * quantityValue).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Booking Fee (5%)</span>
                    <span className="text-white">₹{Math.round(totalPrice * 0.05).toLocaleString()}</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 mt-2 flex justify-between font-bold">
                    <span className="text-white">Total Amount</span>
                    <span className="text-green-400">
                      ₹{Math.round(totalPrice * 1.05).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setStep("details")}
                  className="flex-1 px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 text-white font-semibold transition-all duration-300"
                >
                  Back
                </button>
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isProcessing
                      ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white"
                  }`}
                >
                  {isProcessing ? "Processing..." : "Pay Now"}
                </button>
              </div>
            </div>
          )}

          {step === "confirmation" && ticket && (
            <div className="space-y-6">
              {/* Success Message */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-600/20 border-2 border-green-500 flex items-center justify-center animate-pulse">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-gray-300">
                  Your tickets have been successfully booked
                </p>
              </div>

              {/* Ticket Card */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-purple-500/30 p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Booking Reference</p>
                      <p className="text-white font-mono font-bold text-lg">
                        {ticket.code}
                      </p>
                    </div>
                    <span className="px-4 py-2 rounded-lg bg-green-600/20 border border-green-500/50 text-green-400 font-semibold text-sm">
                      Confirmed
                    </span>
                  </div>

                  <div className="border-t border-dashed border-white/20 py-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Event</p>
                        <p className="text-white font-bold">{ticket.eventTitle}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Date</p>
                          <p className="text-white font-semibold">
                            {ticket.eventDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Tickets</p>
                          <p className="text-white font-semibold">
                            {ticket.quantity} × {ticket.ticketType}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm mb-1">Booking Date</p>
                        <p className="text-white font-semibold">
                          {ticket.bookingDate}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm mb-1">Name</p>
                        <p className="text-white font-semibold">
                          {ticket.userName}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-white/20 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Total Amount</p>
                        <p className="text-green-400 font-bold text-2xl">
                          ₹{Math.round(ticket.totalPrice * 1.05).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400 text-xs">Payment</p>
                        <p className="text-white font-semibold">Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  ✓ A confirmation email has been sent to{" "}
                  <span className="font-semibold">{userDetails.email}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const element = document.createElement("a");
                    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(`Ticket Code: ${ticket.code}\nEvent: ${ticket.eventTitle}\nQuantity: ${ticket.quantity}`));
                    element.setAttribute("download", `ticket-${ticket.code}.txt`);
                    element.style.display = "none";
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  className="flex-1 px-6 py-3 rounded-lg border border-purple-500/50 hover:bg-purple-600/20 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download Ticket
                </button>
                <button
                  onClick={() => {
                    const text = `I just booked tickets for ${ticket.eventTitle}! 🎉 Ticket Code: ${ticket.code}`;
                    navigator.clipboard.writeText(text);
                    alert("Copied to clipboard!");
                  }}
                  className="flex-1 px-6 py-3 rounded-lg border border-pink-500/50 hover:bg-pink-600/20 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 size={18} />
                  Share
                </button>
              </div>

              <button
                onClick={onClose}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold transition-all duration-300"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
