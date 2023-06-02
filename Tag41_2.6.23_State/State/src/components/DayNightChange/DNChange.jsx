import { useState } from 'react'

const DNChange = () => {

    const [night, setNight] = useState(false)
    
    const backgroundColor = night ? "#ffffff" : "#000";
    const textColor = night ? "#000" : "#ffffff";
    return(
        <>
        <div style={{color: textColor, backgroundColor: backgroundColor}}>
        <h1>{night ? "Es ist Tag" : "Es ist Nacht"}</h1>
        <button onClick={() => {setNight(!night)}}>Change Light</button>

        </div>
        </>
    )
}
export default DNChange