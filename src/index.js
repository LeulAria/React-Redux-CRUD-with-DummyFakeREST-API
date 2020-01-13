// React Core modules
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';

import App from './App'

// Redux modules
import { Provider } from 'react-redux';

// The Store
import store from './store'

serviceWorker.register();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
