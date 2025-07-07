// components/SidebarRight.tsx
import data from "../data/data";

const SidebarRight = () => (
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
    <div className="mt-8">
      <h4 className="font-semibold mb-2 font-heading">Sign up for our daily newsletter.</h4>
      <form className="flex">
        <input type="email" placeholder="Email address" className="border p-2 flex-1 text-sm font-author" />
        <button className="bg-black text-white px-4 py-2 text-sm font-author">Sign up</button>
      </form>
    </div>
  </aside>
);

export default SidebarRight;
