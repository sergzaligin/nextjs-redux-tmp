import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../test-reducer';

import Posts from '../components/Posts/Posts';

class Index extends React.Component {
  render() {
    return <Posts />;
  }
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, { getPosts })(Index)
