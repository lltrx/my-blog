"use client"

import {usePreview} from '../../lib/sanity.preview'
import BlogList from './blogList'

type Props = {
     query: string
}


export default function PreviewBlogList({query}: Props) {
     const {data: posts} = usePreview(null, query)
     conlose.log("Loading posts...", posts)
     return(
          <BlogList posts={posts}/>
     )
}