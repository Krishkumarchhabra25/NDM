import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store";
import type { Article } from "../types/article.types";
import Skeleton from "./SkeletonLoader"; // Make sure you have a reusable Skeleton component

const LatestMostRead = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate 10s loading
    return () => clearTimeout(timer);
  }, []);

  const latest: Article[] = [...articles]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4);

  const mostRead: Article[] = [...articles]
    .filter((article) => article.readCount > 10)
    .sort((a, b) => b.readCount - a.readCount)
    .slice(0, 4);

  return (
    <section className="col-span-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Latest Section */}
      <div>
        <h3 className="text-xl font-bold mb-4 font-heading">Latest</h3>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex gap-4 mb-4 border border-black border-opacity-10 p-3 animate-pulse"
              >
                <Skeleton className="w-24 h-24 bg-gray-300 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4 bg-gray-300" />
                  <Skeleton className="h-3 w-1/2 bg-gray-300" />
                </div>
              </div>
            ))
          : latest.map((item) => (
              <Link to={`/article/${item._id}`} key={item._id}>
                <div className="flex gap-4 mb-4 border border-black border-opacity-10 p-3 hover:bg-gray-50 transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-sm font-heading">{item.title}</h4>
                    <p className="text-xs italic text-gray-600 font-subheading">
                      {item.subheading}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </div>

      {/* Most Read Section */}
      <div>
        <h3 className="text-xl font-bold mb-4 font-heading">Most Read</h3>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex gap-4 mb-4 border border-black border-opacity-10 p-3 animate-pulse"
              >
                <Skeleton className="w-24 h-24 bg-gray-300 rounded" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4 bg-gray-300" />
                  <Skeleton className="h-3 w-1/2 bg-gray-300" />
                </div>
              </div>
            ))
          : mostRead.map((item) => (
              <Link to={`/article/${item._id}`} key={item._id}>
                <div className="flex gap-4 mb-4 border border-black border-opacity-10 p-3 hover:bg-gray-50 transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-sm font-heading">{item.title}</h4>
                    <p className="text-xs italic text-gray-600 font-subheading">
                      {item.subheading}
                    </p>
                    {item.readCount > 10 && (
                      <p className="text-xs text-gray-500 mt-1">
                        👁️ {item.readCount} reads
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </section>
  );
};

export default LatestMostRead;
