import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './style.min.css';
import './style/assets/emoji.min.css';
import './style/assets/fontawesome.min.css';
import './style/assets/materialize.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
