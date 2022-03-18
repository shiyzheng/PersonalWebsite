import { EDIT_INTRO } from '../actions'

const intro = (state = { text: '', image: '' }, action) => {
  const { type, text, image } = action
  switch (type) {
    case EDIT_INTRO:
      return { text, image }
    default:
      return state
  }
}

export default intro
