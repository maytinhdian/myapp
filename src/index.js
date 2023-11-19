import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ClassComponent from './components/ClassComponent'
import ProductDetailComponent from './components/ProductDetailComponent'
import CounterComponent from './components/CounterComponent'
import CounterFuncComponent from './components/CounterFuncComponent'
import CalculatorComponent from './components/CalculatorComponent'
import MyApp from './components/MyApp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <ClassComponent title="Demo using Prop in class component" /> */}
    <br />
    {/* <FunctionComponent/> */}
    {/* 
    <ProductDetailComponent
      title="Iphone 14"
      // price={1000}
      content="Description"
    /> */}

    {/* <CalculatorComponent /> */}
    <MyApp />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
