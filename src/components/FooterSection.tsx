
const FooterSection = () => {
  return (
    <footer className="mt-12 border-t-4 border-orange-600 bg-orange-500 text-white py-10 w-full">
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
        <button className="px-5 py-2 border border-white text-white rounded hover:bg-orange-600 transition">
          Contributors
        </button>
        <button className="px-5 py-2 border border-white text-white rounded hover:bg-orange-600 transition">
          Moderator Message
        </button>
        <button className="px-5 py-2 border border-white text-white rounded hover:bg-orange-600 transition">
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
  );
};

export default FooterSection;
