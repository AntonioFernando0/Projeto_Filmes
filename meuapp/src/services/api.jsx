//Base da url: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=f473c8c0ce90b372a47df5442d56c3ec



import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3/'
    }
);

export default api;