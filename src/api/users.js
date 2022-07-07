import request from '@/utils/request'
// import store from '@/store'
export const getSmsCode = (mobile) => {
  return request({
    url: '/sms/codes/${mobile}'
  })
}
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    // eslint-disable-next-line no-template-curly-in-string
    url: '/authorizations',
    data: {
      mobile,
      code
    }
  })
}

// 获取用户个人资料
export const getUserInfo = () => {
  return request({
    url: '/user'
  })
}
