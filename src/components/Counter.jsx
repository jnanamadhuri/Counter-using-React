import { useState } from "react"

const Counter = () => {

    const [count,setCount] =useState(0)
  return (
    <div className="container">
        <div className="count">
            <h1>{count}</h1>
        </div>
        <div className="button">
            <button className="box" onClick={()=>setCount((c)=>c+1)}>Increment</button>
            <button className="box" onClick={()=>setCount((c)=>c-1)}>Decrement</button>
            <button className="box" onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
  )
}

export default Counter