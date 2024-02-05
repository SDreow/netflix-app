import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {

    return<>
        <button className="main-delete-button" onClick={props.deleteMovies}>Vymzat vše</button>
    </>
}

export default AllDeleteButton