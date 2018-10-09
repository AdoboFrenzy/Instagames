import { GET_POST, GET_POSTS, ADD_POST, DELETE_POST, POST_LOADING } from '../actions/types';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function (state = initialState, action) {
    switch(action.type) {
        case POST_LOADING:
            return (Object.assign({}, state, {
                loading: true
            }))

        case GET_POSTS:
            return (Object.assign({}, state, {
                posts: action.payload,
                loading: false
            }))

        // case GET_POSTS:
        //     return (Object.assign({}, state, {

        //     }))

        case ADD_POST:
            return (Object.assign({}, state, {
                posts: [action.payload, ...state.posts]
            }))

        default:
            return state;
    }

}