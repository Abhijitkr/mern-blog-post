import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalState from './context/GlobalContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <GlobalState> <App /></GlobalState>
)
