import React from 'react'
import { useReducer } from 'react'

const App = () => {

  let reducer=(state,action)=>
  {
    if(action.type=="increment")
    {
      return state+1;
    }
    else if(action.type=="decrement")
    {
        return state-1;
    }
    else if(action.type=="reset")
    {
          return 0;
    }
  }

    let [count,dispatch]=useReducer(reducer,0)
  return (
    <>
      <h1 style={{textAlign:"center"}}>UseReducer Examle</h1>
      <h1>count is:{count}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </>
  )
}

export default App