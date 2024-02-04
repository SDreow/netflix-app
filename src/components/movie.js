import "./movie.css"
import data from "../data"

const movie = () => {

    return <div>
        {
            data.map( (oneMovie) => {
                const {id, image, title, age, tags, description} = oneMovie

                return <div key={id}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{age}</p>
                    <p>{tags}</p>
                    <p>{description}</p>
                </div>
            })
        }
    </div>
}

export default movie