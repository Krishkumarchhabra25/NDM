import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store";
import Skeleton from "./SkeletonLoader"; // 🆕 import the skeleton

interface ArticlesGridProps {
  loading?: boolean;
}

const ArticlesGrid = ({ loading = false }: ArticlesGridProps) => {
  const articles = useSelector((state: RootState) => state.articles.articles);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };
  

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <section className="col-span-12 mt-12">
      <h2 className="text-2xl font-bold mb-4 ml-5 font-heading">More from Our Journal</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-[#dcdcdc]">
        {loading
          ? Array.from({ length: visibleCount }).map((_, i) => (
              <div
                key={i}
                className="border-r border-b border-[#dcdcdc] p-4 block animate-pulse space-y-2"
              >
                <Skeleton className="w-full aspect-[16/9] bg-gray-300" />
                <Skeleton className="h-4 w-3/4 bg-gray-300" />
                <Skeleton className="h-3 w-1/2 bg-gray-300" />
              </div>
            ))
          : visibleArticles.map((item) => (
              <Link
                to={`/article/${item._id}`}
                key={item._id}
                className="border-r border-b border-[#dcdcdc] p-4 block hover:bg-gray-50 transition"
              >
                <div className="w-full aspect-[16/9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm mt-2 font-semibold font-heading">{item.title}</h3>
                <p className="text-xs text-gray-600 italic font-subheading">{item.subheading}</p>
              </Link>
            ))}
      </div>

      {!loading && visibleCount < articles.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition rounded"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default ArticlesGrid;
