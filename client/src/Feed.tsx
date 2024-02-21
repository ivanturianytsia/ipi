import React from 'react'

import { PostContainer } from './Post/PostContainer'
import { Post } from './types'

import './Feed.css'

export function Feed() {
  const posts: Post[] = [
    {
      id: 2,
      imageUrl: '/posts/2.jpg',
      location: 'Paris, France',
      description: 'Second',
    },
    {
      id: 1,
      imageUrl: '/posts/1.jpg',
      location: 'Chicago, IL',
      description: 'First',
    },
  ]
  return (
    <div
      className="Feed"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      {posts.map((post) => {
        return <PostContainer post={post} key={post.id} />
      })}
    </div>
  )
}
