import {useState } from "react";
import { MoviesService } from "../api/MoviesService";

export function useMovie(movieId) {
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const { data } = await MoviesService.getMovieDetail(movieId);
        setMovie(data);
    };

    getMovie();

    return movie;
}