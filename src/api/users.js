import request from '@/utils/request'
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
