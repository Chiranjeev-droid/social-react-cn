import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../Actions/posts';
import PostsList from './PostsLists';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <PostsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
