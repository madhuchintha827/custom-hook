import {useState} from 'react'

// custom hooks are like javascript funcion and it will be start with "use" key word.. It will be helps to reuse the code

function useCounter(initiaState = 0, value) {
    let [count, setCount] = useState(initiaState)

    let onIncrement = () =>{
        setCount(prevValue => prevValue + value)
    }

    let onDecrement = () =>{
        setCount(prevValue => prevValue - value)
    }

    let onRest = () =>{
        setCount(initiaState)
    }

    return [count, onIncrement, onDecrement, onRest]
    
}

export default useCounter