import React from 'react'

import Title from './components/Title'
import Intro from './components/Intro'
import PostTitle from './components/PostTitle'
import PostInput from './components/PostInput'
import Posts from './components/Posts'

export const App = () => (
  <>
    <Title />
    <Intro />
    <PostTitle />
    <PostInput />
    <br />
    <br />
    <Posts />
  </>
)

export default App
