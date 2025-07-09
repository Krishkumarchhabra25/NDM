import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 py-6 md:py-10">
        <div className="w-full flex flex-col items-center relative px-0">

          {/* Mobile only: Centered label above bars */}
          <div className="block md:hidden mb-2 w-full text-center px-4">
            <span className="text-[10px] sm:text-xs font-semibold text-gray-700 tracking-wide">
              Who is KarmaYogi?
            </span>
          </div>

          {/* Main bar row */}
          <div className="flex items-center justify-center w-full relative">
            {/* Left green bar */}
            <div className="relative w-1/2 h-10 md:h-15 flex items-center justify-end pr-2 sm:pr-4 bg-green-700">
              {/* md+ only label */}
              <span className="hidden md:block absolute -top-10 left-2 font-semibold text-gray-700 tracking-wide text-[25px]">
                Who is KarmaYogi?
              </span>

              <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider whitespace-nowrap truncate max-w-full">
                Narendra Modi
              </span>
            </div>

            {/* Center title */}
            <Link to={`/`}>
              <h1
                className="z-10 px-2 sm:px-4 bg-white font-extrabold text-4xl md:text-6xl"
                style={{
                  color: '#c65100',
                  fontFamily: `'Georgia', 'serif'`,
                  letterSpacing: '0.08em',
                }}
              >
                NaMo
              </h1>
            </Link>

            {/* Right green bar */}
            <div className="w-1/2 h-10 md:h-15 flex items-center justify-start pl-2 sm:pl-4 bg-green-700">
              <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider whitespace-nowrap truncate max-w-full">
                The KarmaYogi
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[120px]" />
    </>
  );
};

export default Header;
