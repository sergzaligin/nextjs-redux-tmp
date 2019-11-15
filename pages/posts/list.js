import React from 'react'
import { connect } from 'react-redux'

class List extends React.Component {

	render() {
		return (<div>List post</div>);
	}

};

const mapStateToProps = (state) => {
    return {
    	posts: state.testPage.posts
    };
};

export default connect(mapStateToProps, {})(List);
