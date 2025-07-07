// components/SidebarLeft.tsx
import data from "../data/data";

const SidebarLeft = () => (
  <aside className="col-span-3 space-y-6">
    {data.left.map((article, index) => (
      <div key={index} className="border-b border-[#dcdcdc] pb-4">
        <img src={article.image} alt={article.title} className="w-full object-cover h-40" />
        <h2 className="text-lg font-semibold mt-2 font-heading">{article.title}</h2>
        <p className="text-sm italic text-gray-700 font-subheading">{article.subheading}</p>
        <p className="text-xs uppercase text-gray-600 mt-1 font-author">{article.author}</p>
      </div>
    ))}
  </aside>
);

export default SidebarLeft;