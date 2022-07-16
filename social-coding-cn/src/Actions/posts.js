import { UPDATE_POSTS } from './actionTypes';
export function fetchPosts() {
  return (dispatch) => {
    const url = 'http://codeial.com:8000/api/v2/posts/?page=1&limit=5';
    fetch(url)
      .then((response) => {
        console.log('response', response);
        //response object is not json. For converting into json, we  had to
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.ppsts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
