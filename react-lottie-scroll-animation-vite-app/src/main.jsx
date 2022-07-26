import {css} from '@emotion/css';
import {createRoot} from 'react-dom/client';
import '@fontsource/inter';
import './styles/index.scss';
import {BebopLottie} from './components/BebopLottie';
import {Spacer} from './components/Spacer';

const App = () => {
  return (
    <div
      className={css`
      `}
    >
      <header>Hello</header>
      <Spacer height={`20vh`} />
      <BebopLottie />
      <Spacer height={`20vh`} />
      <footer>Bye</footer>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
