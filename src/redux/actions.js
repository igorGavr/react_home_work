import {LOAD_POSTS, LOAD_USERS} from "./action.types";

const loadUsers = (payload, dispatch) => {
    dispatch({type: LOAD_USERS, payload});
}

const loadPosts = (payload,dispatch) => {
    dispatch({type: LOAD_POSTS, payload});
}

export {loadUsers, loadPosts};