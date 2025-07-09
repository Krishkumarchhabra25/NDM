import { useState } from "react";

const FooterSection = () => {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setShowSubscribeModal(false);
    setShowThankYou(true);
    setEmail("");

    // Auto close after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 5000);
  };

  return (
    <>
      <footer className="mt-12 border-t-4 border-orange-600 bg-orange-500 text-white py-10 w-full">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
          <button className="px-5 py-2 border border-white text-white rounded hover:bg-orange-600 transition">
            Contributors
          </button>
          <button className="px-5 py-2 border border-white text-white rounded hover:bg-orange-600 transition">
            Moderator Message
          </button>
          <button
            className="px-5 py-2 border border-white text-white rounded hover:bg-orange-600 transition"
            onClick={() => setShowSubscribeModal(true)}
          >
            Subscribe
          </button>
          <button className="px-5 py-2 border border-white text-white rounded hover:bg-orange-600 transition">
            Feedback
          </button>
        </div>

        <div className="text-center text-sm text-white mt-6">
          © {new Date().getFullYear()} Design Spark Studio. All rights reserved.
        </div>
      </footer>

      {/* Subscribe Modal */}
      {showSubscribeModal && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50"
          onClick={() => setShowSubscribeModal(false)}
        >
          <div
            className="bg-white rounded-lg max-w-md w-full shadow-xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top saffron */}
            <div className="h-2 w-full bg-[#FF9933] rounded-t-lg" />

            <div className="p-6 space-y-4">
              <h2 className="text-lg font-bold text-center font-heading">Subscribe to Daily News Updates</h2>
              <p className="text-sm text-gray-700 font-subheading text-center">
                Stay informed with the latest stories and updates from across India.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded text-sm font-author"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-full bg-[#138808] text-white py-2 rounded font-author text-sm hover:bg-green-800 transition"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
              <button
                className="text-xs text-gray-500 underline block mx-auto mt-2"
                onClick={() => setShowSubscribeModal(false)}
              >
                Cancel
              </button>
            </div>

            {/* Bottom green */}
            <div className="h-2 w-full bg-[#138808] rounded-b-lg" />
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
          <div
            className="bg-white rounded-lg max-w-sm w-full p-6 shadow-xl text-center space-y-3 border border-green-600"
          >
            <div className="h-2 w-full bg-[#FF9933] rounded-t-lg" />
            <h3 className="text-lg font-semibold font-heading text-green-700">Thank you for subscribing!</h3>
            <p className="text-sm font-subheading text-gray-700">
              You’re now part of the India Articles community.
              <br />
              Get ready to receive powerful stories and positive updates daily.
            </p>
            <div className="h-2 w-full bg-[#138808] rounded-b-lg" />
          </div>
        </div>
      )}
    </>
  );
};

export default FooterSection;
