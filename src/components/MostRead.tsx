// components/LatestMostRead.tsx
import data from "../data/data";

const LatestMostRead = () => (
  <section className="col-span-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-xl font-bold mb-4 font-heading">Latest</h3>
      {data.latest.map((item, index) => (
        <div key={index} className="flex gap-4 mb-4 border border-black border-opacity-10 p-3">
          <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
          <div>
            <h4 className="font-semibold text-sm font-heading">{item.title}</h4>
            <p className="text-xs italic text-gray-600 font-subheading">{item.subheading}</p>
          </div>
        </div>
      ))}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-4 font-heading">Most Read</h3>
      {data.mostRead.map((item, index) => (
        <div key={index} className="flex gap-4 mb-4 border border-black border-opacity-10 p-3">
          <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
          <div>
            <h4 className="font-semibold text-sm font-heading">{item.title}</h4>
            <p className="text-xs italic text-gray-600 font-subheading">{item.subheading}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LatestMostRead;
