import request from '@/utils/request'
// 联想数据表
export const getSuggestList = q => {
  return request({
    url: 'suggestion',
    params: {
      q
    }
  })
}

// 获取搜索结果列表
// { page = 1, per_page, q }  解构需要获取的参数
// eslint-disable-next-line camelcase
export const getSearchResult = ({ page = 1, per_page, q }) => {
  return request({
    url: 'search',
    params: {
      page, per_page, q
    }
  })
}
