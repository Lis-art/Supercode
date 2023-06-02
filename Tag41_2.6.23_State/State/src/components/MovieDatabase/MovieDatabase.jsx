import './MovieDatabase.css'

const movieData = ({title, year, director, duration, genre, rate}) => {
    return(
        <>
            <div>
                <p>{title}</p>
                <p>{year}</p>
                <p>{director}</p>
                <p>{duration}</p>
                <p>{genre.map((element) => element + "")}</p>
                <p>{rate}</p>
            </div>    
        </>
    )
}
export default movieData