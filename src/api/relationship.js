import axios from 'axios'

export default {
  all () {
    return axios.get('/customer/relationship/all')
  }
}
