import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store";
import ScrollableArticles from "./ScrollableArticles";
import Skeleton from "./SkeletonLoader"; // 🆕

const SidebarRight = () => {
  const { articles, loading } = useSelector((state: RootState) => state.articles);

  const mostRead = [...articles]
    .sort((a, b) => b.readCount - a.readCount)
    .slice(0, 3);

  const aroundTheWorld = articles.filter((article) => article.aroundTheWorld).slice(0, 6);

  if (loading) {
    return (
      <aside className="col-span-3 space-y-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex gap-3 border-b border-gray-300 pb-4">
            <Skeleton className="w-16 h-16" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-2/3" />
              <Skeleton className="h-2 w-1/3" />
            </div>
          </div>
        ))}
      </aside>
    );
  }

  return (
    <aside className="col-span-3 space-y-6">
      {mostRead.map((article) => (
        <Link to={`/article/${article._id}`} key={article._id}>
          <div className="flex gap-3 border-b border-gray-300 pb-4 hover:bg-gray-100 transition">
            <img src={article.image} alt={article.title} className="w-16 h-16 object-cover" />
            <div>
              <h3 className="text-sm font-semibold leading-snug font-heading">{article.title}</h3>
              <p className="text-xs text-gray-700 italic font-subheading">{article.subheading}</p>
              <p className="text-xs text-gray-600 mt-1 uppercase font-author">{article.author}</p>
            </div>
          </div>
        </Link>
      ))}

      {aroundTheWorld.length > 0 && (
        <ScrollableArticles title="Around the World" articles={aroundTheWorld} />
      )}
    </aside>
  );
};

export default SidebarRight;
