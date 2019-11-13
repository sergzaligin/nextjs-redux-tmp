import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../test-reducer';


class Index extends React.Component {
  render() {
    return (<h1>Hi all</h1>)
  }
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps, { getPosts })(Index)
