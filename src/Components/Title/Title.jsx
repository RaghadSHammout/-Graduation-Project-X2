import { useEffect, useState } from 'react';
import './Title.css';

export default function Title({ title, text, size, maMargin, matext, head, number, isThereText }) {
  const [isCropped, setisCropped] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.screen.width < 700) {
        setisCropped(true);
      } else {
        setisCropped(false);
      }
    };

    window.addEventListener('resize', handleResize)


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <div className={`${maMargin}`}>
      {head && <h1 className={`${size}`} >The Best Streaming Experience</h1>}
      <h2 className={`${size}`}>{title}</h2>

      {isThereText && (
        <p className={`${matext}`}>{isCropped ? text.slice(0, number) : text}</p>
      )}

    </div>
  );
}

Title.defaultProps = {
  isThereText: true,
};