import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/todo',
    method: 'get',
    params
  })
}

export function addTodo(params) {
  return request({
    url: '/todo',
    method: 'post',
    params
  })
}

export function updateTodo(params) {
  return request({
    url: '/todo',
    method: 'put',
    params
  })
}

export function deleteTodo(params) {
  return request({
    url: '/todo',
    method: 'delete',
    params
  })
}