import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import http from '@services/http'

http.init(process.env.REACT_APP_API_URL)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
