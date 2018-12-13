import axios from 'axios'
export default {
  // 保存订单信息
  save (params) {
    return axios.post('/order/save', params)
  },
  // 通过调节获取分页数据
  page_by_condition (params) {
    return axios.post('/order/page_by_condition', params)
  },
  // 通过客户id获取订单信息
  get_order_by_customerid (customerId) {
    return axios.get('/order/get_order_by_customerid?customerId=' + customerId)
  }
}
