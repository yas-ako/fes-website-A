// src/server/api/postList.ts
import client from './client'
import { Post } from '../../types/news'

export default defineEventHandler(async (event) => {
  const data = await client
    .getList<Post>({
      endpoint: 'post',
    })
  return data
})