import './output.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './state/redux/store'
import { GlobalState } from './state/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GlobalState>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </GlobalState>
  </Provider>
)
