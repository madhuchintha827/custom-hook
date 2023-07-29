import React  from 'react'
import useCounter from '../../hooks/useCounter'

let CounterOne = ()=>{
    let [count, onIncrement, onDecrement, onRest] = useCounter(0,1)


  return (
    <React.Fragment>
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <h1 >count - <span className='text-success'>{count}</span></h1>
                    <button onClick={onIncrement} className='btn btn-sm btn-primary m-2'>Increment</button>
                    <button onClick={onDecrement} className='btn btn-sm btn-secondary m-2'>Decrement</button>
                    <button onClick={onRest} className='btn btn-sm btn-warning m-2'>Reset</button>

                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default CounterOne