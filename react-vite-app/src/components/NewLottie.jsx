import {css} from '@emotion/css';
import Lottie from 'lottie-react';
import animationData from '../lotties/77-im-thirsty.json';

const NewLottie = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <h2>New Lottie</h2>
      <div
        className={css`
          width: 400px;
          height: 400px;
          @media (max-width: 768px) {
            width: 300px;
            height: 300px;
          }
        `}
      >
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export {NewLottie};
