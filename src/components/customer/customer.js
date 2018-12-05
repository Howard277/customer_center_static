import customer from '../../api/customer'

export default {
  name: 'customer',
  data () {
    return {
      tableData: [],
      currentRow: null,
      loading: true,
      dialogFormAddCustomer: false,
      newcustomer: {},
      page: {
        total: 0,
        pagesize: 10,
        currentpage: 1
      },
      condition: {
        name: ''
      }
    }
  },
  methods: {
    fresh: function () {
      customer.page_by_condition({
        page: this.page,
        condition: this.condition
      }).then(res => {
        this.page = res.data.page
        this.tableData = JSON.parse(res.data.data)
      })
    },
    // 处理行变更
    handleCurrentChange: function (val) {
      this.currentRow = val
    },
    // 点击 添加按钮
    addCustomer: function () {
      this.newcustomer = {}
      this.dialogFormAddCustomer = true
    },
    // 点击 删除按钮
    deleteCustomer: function () {
      if (this.currentRow == null) {
        this.$message({
          message: '请选择一条记录！',
          type: 'warning'
        })
        return
      }
      this.$confirm('确定要删除当前记录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        customer.delete_by_id({
          'id': this.currentRow.pk
        }).then(res => {
          this.fresh()
          this.$message({
            message: '删除成功！',
            type: 'success'
          })
        })
      }).catch(() => {})
    },
    // 添加客户对话框 取消按钮
    cancelAddCustomer: function () {
      this.dialogFormAddCustomer = false
    },
    // 详情客户对话框
    detailCustomer: function () {
      if (this.currentRow == null) {
        this.$message({
          message: '请选择一条记录！',
          type: 'warning'
        })
        return
      }
      // 将选中行内容赋值给表单对象
      Object.assign(this.newcustomer, this.currentRow.fields)
      this.newcustomer.id = this.currentRow.pk
      this.dialogFormAddCustomer = true
    },
    // 添加客户对话框 保存按钮
    saveAddCustomer: function () {
      customer.save(this.newcustomer).then(res => {
        this.$message({
          message: '添加客户成功！',
          type: 'success'
        })
        this.fresh()
        this.dialogFormAddCustomer = false
      })
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
  created () {
    this.fresh()
    this.loading = false
  }
}