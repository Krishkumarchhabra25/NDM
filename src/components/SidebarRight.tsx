import { useState } from "react";
import data from "../data/data";

const SidebarRight = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  return (
    <aside className="col-span-3 space-y-6">
      {data.right.map((article, index) => (
        <div key={index} className="flex gap-3 border-b border-gray-300 pb-4">
          <img src={article.image} alt={article.title} className="w-16 h-16 object-cover" />
          <div>
            <h3 className="text-sm font-semibold leading-snug font-heading">{article.title}</h3>
            <p className="text-xs text-gray-700 italic leading-tight font-subheading">{article.subheading}</p>
            <p className="text-xs text-gray-600 mt-1 uppercase font-author">{article.author}</p>
          </div>
        </div>
      ))}

  {/* Creative Publish Box – Tricolor Style */}
<div className="p-4 rounded-lg shadow-md border border-gray-200 space-y-2 bg-white relative overflow-hidden">
  {/* Top Saffron bar */}
  <div className="absolute top-0 left-0 h-2 w-full bg-[#FF9933] rounded-t-lg" />

  {/* Content */}
  <h4 className="text-base font-bold font-heading mt-2">Want to Publish Your Article?</h4>
  <p className="text-sm text-gray-700 font-subheading">
    Have a story, idea, or voice the world needs to hear? Share it with us and become a part of the movement.
  </p>

  <button
    onClick={() => setShowModal(true)}
    className="mt-2 bg-[#138808] text-white px-4 py-2 rounded text-sm hover:bg-green-800 transition font-author"
  >
    Request to Publish
  </button>

  {/* Bottom Green bar */}
  <div className="absolute bottom-0 left-0 h-2 w-full bg-[#138808] rounded-b-lg" />
</div>


      {/* Modal */}
   {showModal && (
  <div
    className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50"
    onClick={() => {
      setShowModal(false);
      setShowEmail(false);
    }}
  >
    <div
      className="bg-white p-6 rounded-lg max-w-md w-full space-y-4 shadow-xl"
      onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
    >
      <h2 className="text-lg font-semibold font-heading text-center">We're excited to hear from you!</h2>
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
          className="w-full bg-[#FF9933] text-white py-2 rounded font-author text-sm hover:bg-[#138808] transition"
          onClick={() => setShowEmail(true)}
        >
          Accept & Show Email
        </button>
      )}

      <button
        className="text-xs text-gray-500 underline block mx-auto mt-2"
        onClick={() => {
          setShowModal(false);
          setShowEmail(false);
        }}
      >
        Cancel
      </button>
    </div>
  </div>
)}

    </aside>
  );
};

export default SidebarRight;
