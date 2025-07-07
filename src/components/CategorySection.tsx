// components/CategoriesSection.tsx
import data from "../data/data";

const CategoriesSection = () => (
  <section className="col-span-12 mt-16">
    <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-6 border-gray-300">
      {/* MAGAZINE */}
      <div>
        <h3 className="text-xl font-bold uppercase mb-4 border-b border-black pb-2">MAGAZINE</h3>
        {data.latest.map((item, index) => (
          <div key={index} className="mb-6">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <h4 className="font-semibold text-sm mt-2">{item.title}</h4>
            <p className="text-xs italic text-gray-600">{item.subheading}</p>
          </div>
        ))}
      </div>

      {/* LATEST */}
      <div>
        <h3 className="text-xl font-bold uppercase mb-4 border-b border-black pb-2">LATEST</h3>
        {data.articles.slice(0, 4).map((item, index) => (
          <div key={index} className="flex gap-4 mb-4 border-b pb-4 border-gray-200">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
            <div>
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs italic text-gray-600">{item.subheading}</p>
            </div>
          </div>
        ))}
      </div>

      {/* POPULAR */}
      <div>
        <h3 className="text-xl font-bold uppercase mb-4 border-b border-black pb-2">POPULAR</h3>
        {data.mostRead.map((item, index) => (
          <div key={index} className="flex gap-3 mb-4 items-start border-b pb-4 border-gray-200">
            <span className="text-red-600 text-xl font-bold w-6">{index + 1}</span>
            <div>
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs italic text-gray-600">{item.subheading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
