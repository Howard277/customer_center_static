import customer from '../../api/customer'

export default {
  name: 'first',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    fresh: function () {
      customer.all().then(res => {
        this.tableData = res.data
      })
    }
  },
  created () {
    this.fresh()
  }
}
