import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        let movieslist = [
            {
                id: 1,
                title: "Titanic",
                release_date: "1996-09-03",
                runtime: 116,
                mpaa_rating: "R",
                description: "Hre is long description",
            },
            {
                id: 2,
                title: "King Kong",
                release_date: "1996-10-03",
                runtime: 134,
                mpaa_rating: "PG-12",
                description: "Here is long description",
            },
            {
                id: 3,
                title: "Jasper ",
                release_date: "1954-10-03",
                runtime: 134,
                mpaa_rating: "R",
                description: "Here is long description",
            },
        ]
        setMovies(movieslist)

    }, []);

    return (

        <div className="text-center">
            <h2> Movies </h2>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Movie</th>
                    <th>Release Date</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>

                {movies.map((m) => (
                    <tr key={m.id}>
                        <td>
                            <Link to={`/movies/${m.id}`}>
                                {m.title}
                            </Link>
                        </td>
                        <td>{m.release_date}</td>
                        <td>{m.mpaa_rating}</td>
                    </tr>
                ))}

                </tbody>
            </table>

        </div>

    )
}

export default Movies;
