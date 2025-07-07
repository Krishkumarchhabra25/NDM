import data from "../data/data";

const ArticlesGrid = () => (
  <section className="col-span-12 mt-12">
    <h2 className="text-2xl font-bold mb-4 ml-5 font-heading">More from Our Journal</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-[#dcdcdc]">
      {data.articles.map((item, index) => (
        <div key={index} className="border-r border-b border-[#dcdcdc] p-4">
          
          {/* ✅ Image wrapper with aspect ratio */}
          <div className="w-full aspect-[16/9] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article content */}
          <h3 className="text-sm mt-2 font-semibold font-heading">{item.title}</h3>
          <p className="text-xs text-gray-600 italic font-subheading">{item.subheading}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ArticlesGrid;
