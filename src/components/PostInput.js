import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addPost, deletePost, editPost } from '../actions'

const PostInput = ({
  initialTitle = '', initialText = '', initialImage = '', id, setEditing, dispatchAddPost, dispatchDeletePost, dispatchEditPost,
}) => {
  const [title, setTitle] = useState(initialTitle)
  const [text, setText] = useState(initialText)
  const [image, setImage] = useState(initialImage)
  return (
    <>
      <div className="column is-3">
        <form className="box">
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input width={20} onChange={e => setTitle(e.target.value)} value={title} />
            </div>
          </div>
          <div className="field">
            <label className="label">Text</label>
            <div className="control">
              <input width={20} onChange={e => setText(e.target.value)} value={text} />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input width={20} onChange={e => setImage(e.target.value)} value={image} />
            </div>
          </div>
        </form>
      </div>
      <div>
        <button
          type="button"
          className="button is-info"
          onClick={() => {
            if (id) {
              dispatchEditPost(title, text, image, id)
              setEditing(false)
            } else {
              dispatchAddPost(title, text, image)
            }
          }}
        >
          Save

        </button>
        {id
        && (
        <>
          <button
            type="button"
            className="button is-warning"
            onClick={() => {
              setEditing(false)
            }}
          >
            Cancel
          </button>
          <button type="button" className="button is-danger" onClick={() => dispatchDeletePost(id)}> Delete Post </button>
        </>
        )}

      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, text, image) => dispatch(addPost(title, text, image)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
  dispatchEditPost: (title, text, image, id) => dispatch(editPost(title, text, image, id)),
})

export default connect(null, mapDispatchToProps)(PostInput)
