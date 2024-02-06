import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {

    return <>
        <button className="main-reload-all" onClick={props.reloadMovies}>Načíst filmy</button>
    </>
}

export default ReloadMovieButton