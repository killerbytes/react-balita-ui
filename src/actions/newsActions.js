import axios from 'axios'
import { apiUrl } from '../constants/Config'

export function fetchPost(id){
    return function(dispatch){
        dispatch({
            type: "FETCH_DETAIL"
        })
        
        axios.get(`${apiUrl}/public/posts/${id}`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_DETAIL_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function fetchPosts(page){
    return function(dispatch){
        dispatch({
            type: "FETCH_LIST"
        })
        axios.get(`${apiUrl}/public/posts`, {
            params: {
                page
            }
        })
        .then(function (res) {
            dispatch({
                type: "FETCH_LIST_FULFILLED",
                payload: res.data
            })

        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
