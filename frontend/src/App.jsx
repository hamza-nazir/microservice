import React from 'react'
import { api } from './api'
const App = () => {
  const orderFun=()=>{
    api.get('/order')
    .then((res)=>{
      console.log(res.data)
    })
  }
  const serviceFun=()=>{
    api.get('/services')
    .then((res)=>{
      console.log(res.data)
    })
  }
  const homeFun=()=>{
    api.get('/')
    .then((res)=>{
      console.log(res.data)
    })
  }
  return (
    <div>App v2
      <button onClick={orderFun}>ORDER ROUTE</button>
      <button onClick={serviceFun}>SERVICE ROUTE</button>
      <button onClick={homeFun}>Home ROUTE</button>
    </div>
  )
}

export default App