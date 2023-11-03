import Header from "../assets/Header";
import cars from "../assets/cars.json";
import { useParams } from "react-router-dom";

const CarDetail = () => {
    const idParams = useParams();
    console.log({ idParams });

    const car = cars.filter((elm) => {
        return elm.id.toString() === idParams.ElementId
    })
    console.log(car);

    return(
        <section className="App">
            <Header />
            <h2>{car[0].CarMake}</h2>
            <h2>{car[0].carModel}</h2>
            <h2>{car[0].CarYear}</h2> 
        </section>

    )
}
export default CarDetail;