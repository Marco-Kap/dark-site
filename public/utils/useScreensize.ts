import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


const Navbar = () => {
   const isBreakpoint = useMediaQuery(768)
   return (
    <div>
      { isBreakpoint ? (
        <div>
          <HamburgerMenu />
        </div>
      ) : (
        <div>
           <FullMenu />
        </div>
   )
)}