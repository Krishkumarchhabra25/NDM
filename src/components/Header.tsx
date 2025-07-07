import  { useEffect, useState } from 'react';

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
        <div className="w-full flex flex-col items-center relative px-4">
          {/* Green bars and NaMo */}
          <div className="flex items-center w-full">
            {/* Left green bar */}
            <div className="flex-grow h-5 bg-green-700" />

            {/* NaMo title */}
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

            {/* Right green bar */}
            <div className="flex-grow h-5 bg-green-700" />
          </div>

          {/* Subtitle */}
          <p className="mt-2 text-sm font-semibold text-orange-600 tracking-wide">
            Narendra Modi – The KarmaYogi
          </p>
        </div>
      </header>

      {/* Push content below the fixed header */}
      <div className={scrolled ? 'h-[72px]' : 'h-[120px]'} />
    </>
  );
};

export default Header;
