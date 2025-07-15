import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import {
  subscribeUser,
  resetSubscriberState,
} from "../redux/SubscriberSlices";
import toast from "react-hot-toast";

const FooterSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector(
    (state: RootState) => state.subscriber
  );

  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

const handleSubscribe = () => {
  if (!name.trim() || !email.trim()) return;

  const errorToastId = "subscribe-error";

  dispatch(subscribeUser({ name, email }))
    .unwrap()
    .then(() => {
      setShowSubscribeModal(false);
      setShowThankYou(true);
      setName("");
      setEmail("");

      setTimeout(() => {
        setShowThankYou(false);
        dispatch(resetSubscriberState());
      }, 4000);
    })
    .catch((err) => {
      
      toast.error(err, {
        id: errorToastId, // 💡 prevents duplicate toasts
      });
    });
};

  return (
    <>
      <footer className="mt-12 border-t-4 border-orange-600 bg-orange-500 text-white py-10 w-full">
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
          <button className="px-5 py-2 border border-white text-white rounded hover:bg-[#138808] transition cursor-pointer">
            Contributors
          </button>
          <button className="px-5 py-2 border border-white text-white rounded hover:bg-[#138808] transition cursor-pointer">
            Moderator Message
          </button>
          <button
            className="px-5 py-2 border border-white text-white rounded hover:bg-[#138808] transition cursor-pointer"
            onClick={() => {
              console.log("Opening modal...");
              setShowSubscribeModal(true);
            }}
          >
            Subscribe
          </button>
          <button className="px-5 py-2 border border-white text-white rounded hover:bg-[#138808] transition cursor-pointer">
            Feedback
          </button>
          <button
            className="px-5 py-2 border border-white text-white rounded hover:bg-[#138808] transition cursor-pointer"
            onClick={() => setShowUploadModal(true)}
          >
            Want to Upload an Article?
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
            <div className="h-2 w-full bg-[#FF9933] rounded-t-lg" />
            <div className="p-6 space-y-4">
              <h2 className="text-lg font-bold text-center font-heading">
                Subscribe to Daily News Updates
              </h2>
              <p className="text-sm text-gray-700 font-subheading text-center">
                Stay informed with the latest stories and updates from across India.
              </p>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-2 rounded text-sm font-author"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded text-sm font-author"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="w-full bg-[#138808] text-white py-2 rounded font-author text-sm hover:bg-green-800 transition cursor-pointer disabled:opacity-60"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
              <button
                className="text-xs text-gray-500 underline block mx-auto mt-2 cursor-pointer"
                onClick={() => setShowSubscribeModal(false)}
              >
                Cancel
              </button>
            </div>
            <div className="h-2 w-full bg-[#138808] rounded-b-lg" />
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-sm w-full p-6 shadow-xl text-center space-y-3 border border-green-600">
            <div className="h-2 w-full bg-[#FF9933] rounded-t-lg" />
            <h3 className="text-xl font-bold font-heading text-green-700">
              🎉 Congratulations!
            </h3>
            <p className="text-sm font-subheading text-gray-700">
              You’ve successfully subscribed to daily news updates.
              <br />
              Get ready for stories delivered straight to your inbox!
            </p>
            <div className="h-2 w-full bg-[#138808] rounded-b-lg" />
          </div>
        </div>
      )}

      {/* Upload Article Modal */}
      {showUploadModal && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50"
          onClick={() => {
            setShowUploadModal(false);
            setShowEmail(false);
          }}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-md w-full space-y-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold font-heading text-center">
              We're excited to hear from you!
            </h2>
            <p className="text-sm font-subheading">
              Before sending your article, please ensure:
            </p>
            <ul className="list-disc list-inside text-sm font-subheading space-y-1">
              <li>Content is original and not published elsewhere.</li>
              <li>No offensive or plagiarized content.</li>
              <li>Include references if needed.</li>
              <li>Format: PDF or Word document.</li>
            </ul>

            {showEmail ? (
              <p className="text-sm font-author text-center">
                Please send your article to: <br />
                <span className="font-semibold">submit@yourdomain.com</span>
              </p>
            ) : (
              <button
                className="w-full bg-[#FF9933] text-white py-2 rounded font-author text-sm hover:bg-[#138808] transition cursor-pointer"
                onClick={() => setShowEmail(true)}
              >
                Accept & Show Email
              </button>
            )}

            <button
              className="text-xs text-gray-500 underline block mx-auto mt-2 cursor-pointer"
              onClick={() => {
                setShowUploadModal(false);
                setShowEmail(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterSection;
