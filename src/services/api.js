import axios from 'axios';

//key: cd52cba3f291205958b017d9abda2519
// base da url:https://api.themoviedb.org/3/
//url:movie/now_playing?api_key=cd52cba3f291205958b017d9abda2519&language=pt-BR


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;