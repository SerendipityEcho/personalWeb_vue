import request from '@/utils/request'

export function getAccessList(data) {
    return request({
      url: '/access',
      method: 'get',
      data
    })
  }