import React, { useState } from 'react'

import PostInput from './PostInput'

const Post = ({
  title, text, image, id,
}) => {
  const [editing, setEditing] = useState(false)
  return (
    <>
      <div className="columns">
        <div className="column is-3">
          <div className="box">
            {!editing
        && (
        <>
          <h4 className="title is-4">
            Post #
            {id}
            :
            {title}
          </h4>
          <div>
            {text}
          </div>
          <img src={image} width="600" alt={image} />
          <br />
          <button type="button" className="button is-success" onClick={() => setEditing(!editing)}> Edit Post </button>
        </>
        )}

            {editing
        && (
        <>
          <PostInput initialTitle={title} initialText={text} initialImage={image} id={id} setEditing={setEditing} />
        </>
        )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
