import { postsAPI } from './api';

const initialState = {
	posts: null,
};

const SET_POSTS = 'SET_POSTS';

export default (state = initialState, action) => {
	switch (action.type) {

		case SET_POSTS: 
		
			return {
				...state,
				posts: action.posts,
			};
			
		default:
			return state;
	}
};

export const setPosts = (posts) => ({ type: SET_POSTS, posts });

export const fetchPosts =  () => {

	return dispatch => { 
		postsAPI.list()
        .then((res) => {
        	console.log('her', res);
        		dispatch(setPosts(res));
        });
}
	// const response = await postsAPI.list();
	// console.log(response);
	// dispatch(setPosts(response));

};
