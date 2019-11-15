import React from 'react'
import { connect } from 'react-redux'
import { initializeStore } from '../../store';

import PostList from '../../components/Posts/PostList';

import { fetchPosts } from '../../test-reducer';

class List extends React.Component {

	static async getInitialProps ({ reduxStore, isServer }) {
	    
	    await reduxStore.dispatch(fetchPosts());
	    console.log('reduxStore.getState', reduxStore.getState());
	    return { isServer };
	}
	

	componentDidMount = () => {
		this.props.fetchPosts();
		
		console.log('getInitialProps',  this.props);
	};

	render = () => {
		return <PostList posts={ this.props.posts } />;
	};

};

//List.getInitialProps = () => ({posts: [{title: 'ddddd'}]});

//List.getInitialProps = () => ({posts: [{title: 'ddddd'}]});

const mapStateToProps = (state) => {
    return {
    	posts: state.testPage.posts
    };
};

export default connect(mapStateToProps, { fetchPosts })(List);
