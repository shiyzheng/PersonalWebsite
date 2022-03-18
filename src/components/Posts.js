import React, { useState } from 'react'
import { connect } from 'react-redux'

import Post from './Post'

const Posts = ({ posts, dispatchDeletePost, dispatchEditPost }) => (
  <>
    {posts.map(post => <Post key={post.id} {...post} dispatchDeletePost={dispatchDeletePost} dispatchEditPost={dispatchEditPost} />)}
  </>
)

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps, null)(Posts)
