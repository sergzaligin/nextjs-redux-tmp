import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4445/api/'
});

export const postsAPI = {
	list() {
		return instance.get(`article/list`)
			.then((res) => res.data);
	},
	getOne(id){
		return instance.post(`article/${ id }`);
	},
}