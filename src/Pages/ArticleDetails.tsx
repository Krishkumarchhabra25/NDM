import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { getAllArticleById } from "../redux/ArticleSlice";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { selectedArticle: article, loading, error } = useSelector(
    (state: RootState) => state.articles
  );

useEffect(() => {
  if (id) {
    dispatch(getAllArticleById(id));
  }
}, [dispatch, id]);

console.log("Loaded Article:", article); // ← see what you’re getting


  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error || !article) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-red-600 text-xl font-semibold">
        Article not found
      </div>
    );
  }

  return (
    <div className="font-serif bg-white text-gray-900">
      <Header />
      <main className="mt-0 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <section className="mt-3 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-orange-800 font-heading">
            {article.title}
          </h1>
          <p className="text-lg text-gray-700 italic font-subheading">{article.subheading}</p>
          <p className="text-sm text-gray-500 uppercase font-author">By {article.author}</p>
        </section>

        <hr className="my-8 border-orange-300" />

        <section className="prose prose-lg prose-orange max-w-none font-subheading text-gray-800 leading-relaxed">
          <p>{article.description}</p>
        </section>

       
      </main>
      <FooterSection />
    </div>
  );
};

export default ArticleDetailPage;
