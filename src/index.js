import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'normalize.css'
import 'font-awesome/css/font-awesome.css'
import './styles/main.css'


import configureStore from './configureStore'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
