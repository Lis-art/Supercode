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
// useState enthält den aktuellen Wert von Count und die Aktualisierungsfunktion
// setCount um den Wert anzupassen/zu überschreiben
//useState enthält hier als 0 den Ausgangswert von count
// drei Funktionen werden definiert und mit setCount(count +/-/reset) 
// wirde der neue Wert von Count erfasst und aktualisiert

// im Return werden dann netsprechend der Buttons die jeweiligen Funktionen per Click ausgeführt
