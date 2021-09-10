import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS ";

export const getGifs = (searchTerm)=>{
    return((dispatch => {
        dispatch(fetchStart())
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=kmZebjzejq68SHiZE1aEtrsH7dO7NAhr&q=${searchTerm}`)
        .then(res=>{
            dispatch(fetchSuccess(res.data.data))
        }).catch(err=>console.log(err))
    }))
}

export const fetchStart = () =>{
    return({type: FETCH_START});
}

export const fetchSuccess = gifs =>{
    return({type: FETCH_SUCCESS, payload: gifs});
}