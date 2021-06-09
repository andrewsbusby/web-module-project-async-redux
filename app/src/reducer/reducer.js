import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from './../actions/index';

const initialState = {
    person: {
        name: {
            gamerTag: '',
            level: ''
        },
        picture: {
          large: '',
          medium: '',
          thumbnail: ''  
        },
        isFetching: false,
        error: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
        return ({
            ...state,
            isFetching:true
        });
        case (FETCH_SUCCESS):
            return ({
                ...state,
                isFetching: false,
                person: action.payload
            });
        case (FETCH_FAIL) :
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default: 
            return state;
    }
};