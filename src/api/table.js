import request from '@/utils/system/request'

// 获取数据api
export function getData(data) {
  return request({
    url: '/table/list',
    method: 'post',
    data
  })
}

// 获取分类数据
export function getCategory(data) {
  return request({
    url: '/table/category',
    method: 'post',
    data
  })
}

// 获取树组织数据
export function getTree(data) {
  return request({
    url: '/table/tree',
    method: 'post',
    data
  })
}

// 新增
export function add(data) {
  return request({
    url: '/table/add',
    method: 'post',
    data
  })
}

// 编辑
export function update(data) {
  return request({
    url: '/table/update',
    method: 'post',
    data
  })
}

// 删除
export function del(data) {
  return request({
    url: '/table/del',
    method: 'post',
    data
  })
}