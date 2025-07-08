import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
          scrolled ? 'shadow-md py-2' : 'py-6'
        }`}
      >
        <div className="w-full flex flex-col items-center relative px-0">
          {/* Green Bar Row with Subtitle inside */}
          <div className="flex items-center w-full relative">
            {/* Left green bar with subtitle */}
           <div className="w-1/2 h-10 bg-green-700 flex items-center justify-end pr-4">
  <span className="text-white text-[9px] sm:text-xs md:text-sm font-semibold tracking-wider">
    Narendra Modi
  </span>
</div>

            {/* NaMo title overlapping in center */}
              <Link   to={`/`} >
            <h1
              className={`z-10 px-4 bg-white font-extrabold transition-all duration-300 ${
                scrolled ? 'text-2xl md:text-4xl' : 'text-4xl md:text-6xl'
              }`}
              style={{
                color: '#c65100', // Dark orange
                fontFamily: `'Georgia', 'serif'`,
                letterSpacing: '0.08em',
              }}
            >
              NaMo
            </h1>
</Link>
            {/* Right green bar with subtitle */}
           <div className="w-1/2 h-10 bg-green-700 flex items-center justify-start pl-4">
  <span className="text-white text-[9px] sm:text-xs md:text-sm font-semibold tracking-wider">
    The Karma Yogi
  </span>
</div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className={scrolled ? 'h-[72px]' : 'h-[120px]'} />
    </>
  );
};

export default Header;
