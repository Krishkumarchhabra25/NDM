import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store";
import Skeleton from "./SkeletonLoader"; // 🆕

const SidebarLeft = () => {
  const { articles, loading } = useSelector((state: RootState) => state.articles);
  const leftArticles = articles.slice(0, 3);

  if (loading) {
    return (
      <aside className="col-span-3 space-y-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="border-b border-[#dcdcdc] pb-4">
            <Skeleton className="w-full h-40" />
            <Skeleton className="h-5 mt-2 w-3/4" />
            <Skeleton className="h-4 mt-1 w-2/3" />
            <Skeleton className="h-3 mt-1 w-1/3" />
          </div>
        ))}
      </aside>
    );
  }

  return (
    <aside className="col-span-3 space-y-6">
      {leftArticles.map((article) => (
        <Link to={`/article/${article._id}`} key={article._id}>
          <div className="border-b border-[#dcdcdc] pb-4">
            <img src={article.image} alt={article.title} className="w-full object-cover h-40" />
            <h2 className="text-lg font-semibold mt-2 font-heading">{article.title}</h2>
            <p className="text-sm italic text-gray-700 font-subheading">{article.subheading}</p>
            <p className="text-xs uppercase text-gray-600 mt-1 font-author">{article.author}</p>
          </div>
        </Link>
      ))}
    </aside>
  );
};

export default SidebarLeft;
