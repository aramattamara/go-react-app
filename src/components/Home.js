import Ticket from './../images/movie_tickets.jpg'
import {Link} from "react-router-dom";
import movies from "./Movies";

const Home = () => {

    return (
        <>
            <div className="text-center">
                <h2> Find a movie to watch tonight! </h2>
                <hr/>
                <Link to="/movies">
                    <img src={Ticket} alt="movie tickets" width="auto" height="200"/>
                </Link>

            </div>
        </>
    )
}

export default Home;
