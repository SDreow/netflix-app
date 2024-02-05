import "./Movie.css"
import data from "../data"
import MovieDeleteButton from "./MovieDeleteButton"
import AllDeleteButton from "./AllDeleteButton"
import { useState } from "react"

const Movie = () => {
    const [movieList, setMovieList] = useState(data)

    const deleteOneMovie = (ids) => {
        const filteredMovies = movieList.filter( (oneMovie) => {
            return oneMovie.id !== ids
        })
        setMovieList(filteredMovies)
    }

    const deleteAllMovies = () => {
        setMovieList([])
    }


    return <section>
        <div className = "all-movies">
            {
                movieList.map( (oneMovie) => {
                    const {id, image, title, age, tags, description} = oneMovie

                    return <div key={id} className = "one-movie">
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)}/>
                    </div>
                })
            }
            
        </div>
        <div>
            <AllDeleteButton deleteMovies={deleteAllMovies}/>
        </div>
    </section>
}

export default Movie