import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app/App.js'
import registerServiceWorker from './registerServiceWorker'

localStorage.setItem('authenticated', JSON.stringify(false))
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
