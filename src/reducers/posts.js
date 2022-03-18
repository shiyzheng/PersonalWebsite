import { ADD_POST, DELETE_POST, EDIT_POST } from '../actions'

const default_state = []

const posts = (state = default_state, action) => {
  const {
    type, title, text, id, image,
  } = action
  let newState = []
  switch (type) {
    case ADD_POST:
      return [...state, {
        title, text, id, image,
      }]
    case DELETE_POST:
      for (let i = 0; i < state.length; i++) {
        if (id !== state[i].id) {
          newState = [...newState, state[i]]
        }
      }
      return newState
    case EDIT_POST:
      for (let i = 0; i < state.length; i++) {
        if (id !== state[i].id) {
          newState = [...newState, state[i]]
        } else {
          newState = [...newState, {
            title, text, id, image,
          }]
        }
      }
      return newState
    default:
      return state
  }
}

export default posts
