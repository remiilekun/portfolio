import { useEffect, useState } from 'react';

function useMultipleClickaway(refs) {
  const [isOutside, setIsOutSide] = useState(true);
  function handleClickOutside(event) {
    const outside = refs.every(ref => ref.current && !ref.current.contains(event.target));
    setIsOutSide(outside);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return [isOutside];
}

export { useMultipleClickaway };
