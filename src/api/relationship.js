import axios from 'axios'

export default {
  all () {
    return axios.get('/customer/relationship/all')
  },
  get_by_customerid (customerId) {
    return axios.get('/customer/relationship/get_by_customerid?customer_id=' + customerId)
  },
  save (params) {
    return axios.post('/customer/relationship/save', params)
  }
}
