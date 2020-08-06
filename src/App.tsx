import React from 'react'
import { Provider } from 'react-redux'

import MainApp from '@containers/Main'
import store from '@store/index'
import './assets/styles/index.scss'

const App = () =>
  <Provider store={store}>
    <MainApp />
  </Provider>

export default App
