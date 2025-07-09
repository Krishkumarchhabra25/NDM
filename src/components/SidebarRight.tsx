import data from "../data/data";
import ScrollableArticles from "./ScrollableArticles";

const SidebarRight = () => {
  return (
    <aside className="col-span-3 space-y-6">
      {/* Top Articles Section */}
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

      {/* Around the World Scrollable Section */}
      <ScrollableArticles
        title="Around the World"
        articles={data.articles.slice(0, 6)} // limit or paginate if needed
      />
    </aside>
  );
};

export default SidebarRight;
