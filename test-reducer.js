
const initialState = {
	posts: [
		{
			id: 1,
			message: 'Hi John! How are you?',
			likesCount: 3,
		},
		{
			id: 2,
			message: 'Hi Bill! I am fine thanks!',
			likesCount: 3,
		},
		{
			id: 3,
			message: 'Hi Fred!',
			likesCount: 3,
		}
	],
};

const GET_POSTS = 'GET_POSTS';

export default (state = initialState, action) => {
	switch (action.type) {

		case GET_POSTS: 
		
			return {
				...state
			};
			
		default:
			return state;
	}
};

export const getPosts = () => ({ type: GET_POSTS });