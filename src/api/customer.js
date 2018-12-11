import axios from 'axios'

export default {
  // 查询全部客户信息
  all () {
    return axios.get('/customer/all')
  },
  // 保存客户信息
  save (params) {
    return axios.post('/customer/save', params)
  },
  // 删除客户信息
  delete_by_id (params) {
    return axios.post('/customer/delete_by_id', params)
  },
  // 通过调节获取分页数据
  page_by_condition (params) {
    return axios.post('/customer/page_by_condition', params)
  },
  upload_customer_image (params) {
    return axios.post('/customer/upload_customer_image', params)
  }
}
