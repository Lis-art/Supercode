import { useState } from 'react'

const Counter = () => {

    let [count, setCount] = useState(0);

    function add() {
        setCount(count +1)
    }
    function remove(){
        setCount(count -1)
    }
    function reset (){
        setCount(count = 0)
    }
    return(
        <>
        <p>Counter: {count} </p>
        <button onClick={add}>+</button>
        <button onClick={remove}>-</button>
        <button onClick={reset}>Reset</button>
        </>
    )

}
export default Counter