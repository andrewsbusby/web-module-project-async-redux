import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getSpartan = () => {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get('https://www.haloapi.com/profile/h5/profiles/jedimasterbusby/spartan')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                dispatch(fetchFail(err));
            })
    }
}

export const  fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = () => {
    return({type: FETCH_SUCCESS});
}

export const fetchFail = () => {
    return({type: FETCH_FAIL});
}