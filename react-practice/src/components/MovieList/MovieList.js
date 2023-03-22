import React from 'react';
import axios from 'axios';

function MovieList() {
    const [movies, setMovies] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)

    React.useEffect(() => {
        fetchMovies(1)
    }, []);

    const fetchMovies = (currentPageNumber) => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?page=${currentPageNumber}`)
            .then(response => {
                setMovies(response.data.results)
                setCurrentPage(currentPageNumber)
            })
    }

    return (
        <div>
            {/* <MovieCard /> */}
        </div>
    )

}


export default MovieList;