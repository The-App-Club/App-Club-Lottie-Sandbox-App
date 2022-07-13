import {css} from '@emotion/css';
import {createRoot} from 'react-dom/client';
import {NewLottie} from './components/NewLottie';
import {OldLottie} from './components/OldLottie';

import '@fontsource/inter';
import './styles/index.scss';

const App = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        gap: 1rem;
        @media (max-width: 768px) {
          padding: 1rem;
          flex-direction: column;
        }
      `}
    >
      <OldLottie />
      <NewLottie />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
