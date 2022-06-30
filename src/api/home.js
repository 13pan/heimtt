import request from '@/utils/request'
// import store from '@/store'
export const getMyChannels = () => {
  return request({
    url: 'user/channels'
  })
}
// 文章列表
// eslint-disable-next-line camelcase
export const getArticleList = ({ channel_id, timestamp }) => {
  return request({
    url: 'articles',
    params: { channel_id, timestamp }
  })
}
// 所有频道列表
export const getAllArticleList = () => {
  return request({
    url: 'channels'
  })
}
