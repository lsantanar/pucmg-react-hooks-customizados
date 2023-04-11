import axios from 'axios';

const API_KEY = '0a398a3f6adbf2e2f44e5bfb4fbcef6e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieDetail(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }
}