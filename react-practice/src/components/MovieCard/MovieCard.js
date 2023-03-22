function MovieCard(props) {
    console.log(props)
    return (
        <div>
            <img src={props.image} />
            <p>{props.name}</p>
        </div>
    )
}

export default MovieCard;