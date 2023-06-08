import cars from "../assets/cars.json";
import { Link } from "react-router-dom";

const CarList = () => {
    return(
        <section>
            {cars.map((elm, index) =>{
                return(
                    <div className="carItem" key={index}>
                        <p>{elm.CarMake}</p>
                        <Link to={`/cars/${elm.id}`}>Read More</Link>
                    </div>
                )
            })}
        </section>
    )
}
export default CarList;