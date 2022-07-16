import { UPDATE_POSTS } from '../Actions/actionTypes';

export default function posts(state = [], action) {
  //{posts:[]}
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
