import React from 'react'
import { connect } from 'react-redux'

import Posts from '../components/Posts/Posts';

import { fetchPosts } from '../test-reducer';

class Index extends React.Component {

	componentDidMount(){
		this.props.fetchPosts();
	}

	render() {
		return <Posts posts={ this.props.posts } />;
	}

};

const mapStateToProps = (state) => {
    return {
    	posts: state.testPage.posts
    };
};

export default connect(mapStateToProps, { fetchPosts })(Index);
