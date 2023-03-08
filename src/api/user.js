import request from '@/utils/system/request'

// 登录api
export function loginApi(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 获取用户信息Api
export function getInfoApi(data) {
  return request({
    url: '/user/info',
    method: 'post',
    data
  })
}

// 退出登录Api
export function loginOutApi() {
  return request({
    url: '/user/out',
    method: 'post',
  })
}

// 获取用户信息Api
export function passwordChange(data) {
  return request({
    url: '/user/passwordChange',
    method: 'post',
    data
  })
}
