import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/4203-take-a-selfie.json';

function UncontrolledLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const controlled = {
    width: '40vw',
    margin: '0 auto',
  };
  return (
    <div style={controlled}>
      <h1>Lottie</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default UncontrolledLottie;
