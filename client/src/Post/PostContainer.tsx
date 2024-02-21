import React from 'react'
import { Post } from '../types'
import { PostHeader } from './PostHeader'

interface PostContainerProps {
  post: Post
}

export function PostContainer({ post }: PostContainerProps) {
  return (
    <div
      className="PostContainer"
      style={{
        width: '100%',
      }}
    >
      <PostHeader post={post} />
      <img
        style={{
          width: '100%',
        }}
        src={post.imageUrl}
        alt=""
      />
    </div>
  )
}
