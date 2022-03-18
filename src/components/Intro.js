import React, { useState } from 'react'
import { connect } from 'react-redux'

import IntroInput from './IntroInput'

const Intro = ({ text, image }) => {
  const [editing, setEditing] = useState(false)
  return (
    <>
      <>
        {!editing && (<button type="button" className="button is-primary" onClick={() => setEditing(!editing)}> Edit </button>)}
      </>
      {!editing && (
      <>
        <div>
          {text}
        </div>
        <div>
          {image && <img src={image} width="600" alt={image} />}
        </div>
      </>
      )}
      <>
        {editing && (<IntroInput initialText={text} initialImage={image} setEditing={setEditing} />)}
      </>
    </>
  )
}

const mapStateToProps = ({ intro }) => intro

export default connect(mapStateToProps, null)(Intro)
