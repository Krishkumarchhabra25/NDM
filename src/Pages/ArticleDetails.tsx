import { useParams } from 'react-router-dom';
import data from '../data/data';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = data.articles[parseInt(id || '0')];

  if (!article) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-red-600 text-xl font-semibold">
        Article not found
      </div>
    );
  }

  return (
    <div className="font-serif bg-white text-gray-900">
      <Header />

      <main className="mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Headline Section */}
        <section className="mt-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-orange-800 font-heading">
            {article.title}
          </h1>
          <p className="text-lg text-gray-700 italic font-subheading">
            {article.subheading}
          </p>
          <p className="text-sm text-gray-500 uppercase font-author">By The India Desk</p>
        </section>

        <hr className="my-8 border-orange-300" />

        {/* Main Content */}
        <section className="prose prose-lg prose-orange max-w-none font-subheading text-gray-800 leading-relaxed">
          <p>{article.description}</p>

          <p>
            India’s evolving position on the world stage marks a shift in both economic strength and
            diplomatic influence. With growing investments in infrastructure, defense, and digital
            innovation, the country is building a new future. Prime Minister Modi's strategic
            policies aim to position India as a self-reliant yet globally integrated powerhouse.
          </p>

          <blockquote>
            “The future belongs to those who prepare for it today.” – Narendra Modi
          </blockquote>

          <h2 className="text-2xl font-semibold mt-6">What This Means for India's Future</h2>
          <p>
            This trajectory signals a promising transformation: youth empowerment, sustainability,
            and an innovation-driven economy. As India heads toward 2047, its 100th year of
            independence, these changes will shape global narratives.
          </p>
        </section>

        {/* Call to Action */}
        <div className="mt-12 bg-orange-50 border border-orange-200 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-orange-800 font-heading mb-2">
            Enjoyed this article?
          </h3>
          <p className="text-sm text-gray-700 mb-4 font-subheading">
            Sign up for our newsletter to stay informed with fresh insights delivered daily.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-auto text-sm"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </main>
      

      <FooterSection />
    </div>
  );
};

export default ArticleDetailPage;
