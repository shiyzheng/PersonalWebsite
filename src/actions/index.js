export const EDIT_INTRO = 'EDIT_INTRO'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

let i = 1

export const editIntro = (text, image) => ({
  type: EDIT_INTRO,
  text,
  image,
})

export const addPost = (title, text, image) => ({
  type: ADD_POST,
  title,
  text,
  image,
  id: i++,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})

export const editPost = (title, text, image, id) => ({
  type: EDIT_POST,
  title,
  text,
  image,
  id,
})
