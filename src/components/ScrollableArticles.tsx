import { Link } from "react-router-dom";
import Skeleton from "./SkeletonLoader"; // 🆕 import your skeleton component

interface Article {
  _id: string;
  title: string;
  subheading: string;
  image: string;
}

interface Props {
  title: string;
  articles: Article[];
  loading?: boolean;
}

const ScrollableArticles: React.FC<Props> = ({ title, articles, loading = false }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-base md:text-lg font-bold font-heading border-b border-gray-300 pb-2">
        {title}
      </h2>

      <div className="max-h-80 overflow-y-auto pr-2 space-y-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex gap-3 border-b border-gray-200 pb-3 animate-pulse"
              >
                <Skeleton className="w-16 h-16 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-2/3" />
                </div>
              </div>
            ))
          : articles.map((article) => (
              <Link to={`/article/${article._id}`} key={article._id}>
                <div className="flex gap-3 border-b border-gray-200 pb-3 hover:bg-gray-100 transition">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-sm md:text-base font-semibold font-heading leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs md:text-sm italic text-gray-600 font-subheading leading-tight">
                      {article.subheading}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default ScrollableArticles;
