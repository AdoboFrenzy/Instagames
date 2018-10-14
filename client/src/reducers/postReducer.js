import { GET_POST, GET_POSTS, GET_CURRENT_USER_POSTS, ADD_POST, DELETE_POST, POST_LOADING } from '../actions/types';

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

        case GET_CURRENT_USER_POSTS:
            return (Object.assign({}, state, {
                posts: action.payload,
                loading: false
            }))

        case GET_POST:
            return (Object.assign({}, state, {
                post: action.payload,
                loading: false
            }))

        case DELETE_POST:
            return (Object.assign({}, state, {
                posts: state.posts.filter(post => post._id !== action.payload) // deletes post with matched id from state
            }))

        case ADD_POST:
            return (Object.assign({}, state, {
                posts: [action.payload, ...state.posts]
            }))

        default:
            return state;
    }

}