import {css} from '@emotion/css';
import {useEffect, useState} from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/77-im-thirsty.json';

const OldLottie = () => {
  const [width, setWidth] = useState(
    window.matchMedia('(max-width: 768px').matches ? 300 : 400
  );
  const [height, setHeight] = useState(
    window.matchMedia('(max-width: 768px').matches ? 300 : 400
  );

  const handleResize = (e) => {
    setWidth(window.matchMedia('(max-width: 768px').matches ? 300 : 400);
    setHeight(window.matchMedia('(max-width: 768px').matches ? 300 : 400);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <h2>Old Lottie</h2>
      <Lottie
        options={{
          loop: true,
          animationData,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={height}
        width={width}
      />
    </div>
  );
};

export {OldLottie};
