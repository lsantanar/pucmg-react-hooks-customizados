import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export function useMovies() {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const {
            data: { results },
        } = await MoviesService.getMovies();

        setMovies(results);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return movies;
}