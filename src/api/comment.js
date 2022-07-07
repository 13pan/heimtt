import request from '@/utils/request'
/**
 *评论列表
 * @param type 评论类型 a是对article b是对comment
 * @returns
 */
export const getCommentList = ({ type, source, offset, limit }) => {
  return request({
    url: '/comments',
    params: {
      type, source, offset, limit
    }
  })
}

// 点赞
export const addLike = (target) => {
  return request({
    method: 'POST',
    url: '/comment/likings',
    data: {
      target
    }
  })
}
export const delLike = (target) => {
  return request({
    method: 'DELETE',
    url: `/comment/likings/${target}`
  })
}

export const addComment = (data) => {
  return request({
    method: 'POST',
    url: '/comments',
    data
  })
}
