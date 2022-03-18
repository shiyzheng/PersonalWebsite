import React, { useState } from 'react'

import { connect } from 'react-redux'

import { editIntro } from '../actions'

const IntroInput = ({
  initialText, initialImage, setEditing, dispatchEditIntro,
}) => {
  const [text, setText] = useState(initialText)
  const [image, setImage] = useState(initialImage)

  return (
    <>
      <form className="box">
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
      <button
        type="button"
        className="button is-info"
        onClick={() => {
          setEditing(false)
          dispatchEditIntro(text, image)
        }}
      >
        Save
      </button>
      <button type="button" className="button is-warning" onClick={() => setEditing(false)}> Cancel </button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (text, image) => dispatch(editIntro(text, image)),
})

export default connect(null, mapDispatchToProps)(IntroInput)
