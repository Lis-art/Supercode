import cars from "../assets/cars.json";
import { Link } from "react-router-dom";


const CarList = () => {
    return(
        <section className="grid">
            {cars.map((elm, index) =>{
                return(
                    <div className="grid-item" key={index}>
                        <p>{elm.CarMake}</p>
                        <Link to={`/cars/${elm.id}`}>Read More</Link>
                    </div>
                )
            })}
        </section>
    )
}
export default CarList;