import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

const routes = require('./routes/index').default()

ReactDOM.render(<App routes={routes} />, document.getElementById('root'))
