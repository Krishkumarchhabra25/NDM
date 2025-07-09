interface Article {
  title: string;
  subheading: string;
  image: string;
}

interface Props {
  title: string;
  articles: Article[];
}

const ScrollableArticles: React.FC<Props> = ({ title, articles }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-base md:text-lg font-bold font-heading border-b border-gray-300 pb-2">
        {title}
      </h2>

      <div className="max-h-80 overflow-y-auto pr-2 space-y-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex gap-3 border-b border-gray-200 pb-3"
          >
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
        ))}
      </div>
    </div>
  );
};

export default ScrollableArticles;
