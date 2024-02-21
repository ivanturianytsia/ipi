import React from 'react'
import { Post } from '../types'

import './PostHeader.css'

interface PostHeaderProps {
  post: Post
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <div
      className="PostHeader"
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        width: '100%',
      }}
    >
      <img
        style={{
          width: '40px',
          height: '40px',
          marginRight: '10px',
        }}
        src="/profile.jpg"
        alt=""
      />
      <div>
        <div>
          <a href="https://turianytsia.com" target="_blank" rel="noreferrer">
            ivanturianytsia
          </a>
        </div>
        <div>{post.location}</div>
      </div>
    </div>
  )
}
