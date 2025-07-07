import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import MainFeature from './components/MainFeature';
import ArticlesGrid from './components/ArticlesGrid';
import VideoReels from './components/VideoReels';
import LatestMostRead from './components/MostRead';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    <div className="font-serif bg-white">
      <Header />

      {/* Main Content Area */}
      <main className="px-4 md:px-6 mt-16 max-w-screen-xl mx-auto">
        {/* ✅ Mobile Layout */}
        <div className="block md:hidden">
          <MainFeature />
          <div className="mt-6">
            <SidebarLeft />
          </div>
          <div className="mt-6">
            <SidebarRight />
          </div>
        </div>

        {/* ✅ Desktop Layout */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <SidebarLeft />
          </div>
          <div className="col-span-6">
            <MainFeature />
          </div>
          <div className="col-span-3">
            <SidebarRight />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#dcdcdc] my-6"></div>

        {/* Full-width sections */}
        <div>
          <ArticlesGrid />
          <LatestMostRead />
          <VideoReels />
   
       
        </div>
      </main>
         <FooterSection />
    </div>
  );
};

export default App;
