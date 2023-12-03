import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: {
    absolute: 'blog (using absolute in page ignores template title in layout page)'
  }
}

function Blog() {
  return (
    <div>Blog</div>
  )
}

export default Blog