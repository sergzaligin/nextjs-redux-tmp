import axios from 'axios';
import fetch from 'isomorphic-unfetch';

const instance = axios.create({
	baseURL: 'http://localhost:4445/api/'
});

export const postsAPI = {
	async list() {
		const res = await fetch(`http://localhost:4445/api/article/list`);
		const data = await res.json();

		return data;
		//console.log(data);

	},
	getOne(id){
		return instance.post(`article/${ id }`);
	},
}