import customer from '../../api/customer'

export default {
  name: 'customer',
  data () {
    return {
      tableData: [],
      currentRow: null
    }
  },
  methods: {
    fresh: function () {
      customer.all().then(res => {
        let tempData = res.data
        this.tableData = tempData
      })
    },
    handleCurrentChange: function (val) {
      this.currentRow = val
    }
  },
  created () {
    this.fresh()
  }
}
