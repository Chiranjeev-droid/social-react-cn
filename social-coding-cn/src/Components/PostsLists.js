import React, { Component } from 'react';

export default class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="posts-list">
          {posts.map((post) => (
            <div className="post-wrapper" key={post._id}>
              <div className="post-header">
                <div className="post-avatar">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-pic"
                  />
                  <div>
                    <span className="post-author">{post.user.name}</span>
                    <span className="post-time">a minute ago</span>
                  </div>
                </div>
                <div className="post-content">{post.content}</div>
                <div className="post-actions">
                  <div className="post-like">
                    <img
                      src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                      alt="post-like"
                    />
                    <span>{post.likes.length}</span>
                  </div>
                  <div className="post-comments-icon">
                    <img
                      src="https://image.flaticon.com/icons/svg/2462/2462719.svg"
                      alt="comments-icon"
                    />
                    <span>{post.comments.length}</span>
                  </div>
                </div>
                <div className="post-comment-box">
                  <input placeholder="Start typing a comment" />
                </div>
                <div className="post-comments-list">
                  <div className="post-comments-item">
                    <div className="post-comments-header">
                      <span className="post-comment-author">Bill</span>
                      <span className="post-comment-time">a minute ago</span>
                      <span className="post-comment-likes">22</span>
                    </div>
                    <div className="post-comment-content">Random comment</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
