import axios from 'axios'

export default {
  all () {
    return axios.get('/mars_customer_center_sidecar/customer/relationship/all')
  },
  get_by_customerid (customerId) {
    return axios.get('/mars_customer_center_sidecar/customer/relationship/get_by_customerid?customer_id=' + customerId)
  },
  save (params) {
    return axios.post('/mars_customer_center_sidecar/customer/relationship/save', params)
  }
}
