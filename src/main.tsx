import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

import App from './app';
import './styles.scss';

initThinBackend({
  host: 'https://behaivoural-cards.thinbackend.app'
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ThinBackend requireLogin>
      <App />
    </ThinBackend>
  </StrictMode>
);
