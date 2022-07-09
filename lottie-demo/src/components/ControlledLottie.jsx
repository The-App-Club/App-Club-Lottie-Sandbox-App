import React, {useState} from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/77-im-thirsty.json';

function ControlledLottie() {
  const [isPaused, setIsPaused] = useState(false);
  const [message, setMessage] = useState('Play');

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const controller = {
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttons = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  };

  const controlled = {
    width: '40vw',
    margin: '0 auto',
  };

  function handlePlayerToggle(e) {
    const playAndPauseButtonDom = e.target;
    if (isPaused) {
      playAndPauseButtonDom.classList.add('play');
      playAndPauseButtonDom.classList.remove('pause');
      setMessage('Play');
    } else {
      playAndPauseButtonDom.classList.add('pause');
      playAndPauseButtonDom.classList.remove('play');
      setMessage('Pause');
    }

    setIsPaused((isPaused) => {
      return !isPaused;
    });
  }

  return (
    <div style={controlled}>
      <h1>Controlled Lottie</h1>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isPaused={!isPaused}
      />

      <div style={controller}>
        <button
          style={buttons}
          onClick={(e) => {
            handlePlayerToggle(e);
          }}
        >
          <span className="button-message">{message}</span>
        </button>
      </div>
    </div>
  );
}

export default ControlledLottie;
