import order from '@/api/order.js'
export default {
  name: 'order',
  data: function () {
    return {
      tableData: [],
      currentRow: null,
      loading: true,
      //   dialogFormAddCustomer: false,
      currentOrder: {},
      page: {
        total: 0,
        pagesize: 10,
        currentpage: 1
      },
      condition: null,
      dialogVisible: false,
      label_position: 'left',
      dialogOrder: false // 订单对话框
    }
  },
  methods: {
    fresh: function () {
      this.loading = true
      order.page_by_condition({
        page: this.page,
        condition: this.condition
      }).then(res => {
        this.page = res.data.page
        this.tableData = JSON.parse(res.data.data)
      })
      this.loading = false
    },
    // 搜索
    search: function () {
      this.page = {
        total: 0,
        pagesize: 10,
        currentpage: 1
      }
      this.fresh()
    },
    // 添加订单
    addOrder: function () {
      // 置空当前订单对象；打开订单对话框
      this.currentOrder = {}
      this.dialogOrder = true
    },
    // 取消新增订单
    cancelOrder: function () {
      this.dialogOrder = false
    },
    // 保存订单
    saveOrder: function () {
      order.save(this.currentOrder).then(res => {
        this.dialogOrder = false
        this.fresh()
      })
    },
    // 查看订单详情
    detailOrder: function () {},
    // 处理当前行 变化
    handleCurrentChange: function (val) {
      this.currentRow = val
    },
    // 处理页尺寸的变化
    handlePageSizeChange: function (val) {
      this.page.pagesize = val
      this.fresh()
    },
    // 处理当前页的变化
    handleCurrentPageChange: function (val) {
      this.page.currentpage = val
      this.fresh()
    }
  },
  created: function () {
    this.fresh()
  }
}
