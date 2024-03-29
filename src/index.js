import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

// Styles
import './index.scss'

// Components
import App from './App'

// Redux
import { store } from 'redux/store'
import { Provider } from 'react-redux'

// Mock Data
import products from 'products/products'

localStorage.setItem("products", JSON.stringify(products))

const root = ReactDOM.createRoot(document.getElementById('root')) || document.createElement('div') // for testing
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
