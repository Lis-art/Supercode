import { Link } from "react-router-dom";
import { useState } from 'react'

const Nav = () => {
    
    const [darker, setDark] = useState(false)
    const backgroundColor = darker ? "#73BBC9" : "#F1D4E5";
    const textColor = darker ? "#F1D4E5" : "#73BBC9";
    
    return(
        <nav>
            <Link to="/about" onClick={() => {setDark(!darker);}} style={{ color: textColor, backgroundColor: backgroundColor }}>About</Link>
            <Link to="/contact" onClick={() => {setDark(!darker);}}  style={{color: textColor, backgroundColor: backgroundColor}}>Contact</Link>
            <Link to="/oeffnungszeiten"  onClick={() => {setDark(!darker);}}  style={{color: textColor, backgroundColor: backgroundColor}}>Öffnungszeiten</Link>
            <Link to="/speisekarte"  onClick={() => {setDark(!darker);}}  style={{color: textColor, backgroundColor: backgroundColor}}>Speisekarte</Link>
        </nav>
    )
}
export default Nav;