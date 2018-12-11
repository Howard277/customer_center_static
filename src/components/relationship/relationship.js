import relationship from '../../api/relationship'

export default {
  name: 'relationship',
  data: function () {
    return {
      tableData: [],
      currentRow: null,
      loading: false,
      curRelationship: {},
      dialogAddRelationship: false // 客户联系人对话框显示控制
    }
  },
  props: {
    // 客户对象，从父模块传入
    customer: null
  },
  methods: {
    // 更新
    fresh: function () {
      this.loading = true
      relationship.get_by_customerid(this.customer.pk).then(res => {
        this.tableData = res.data
        for (let index in this.tableData) {
          if (this.tableData[index]['fields']['sex'] === 'woman') {
            this.tableData[index]['fields']['sexname'] = '女'
          } else {
            this.tableData[index]['fields']['sexname'] = '男'
          }
        }
      })
      this.loading = false
    },
    // 添加联系人
    addRelationship: function () {
      this.curRelationship = {}
      this.dialogAddRelationship = true
    },
    // 取消添加联系人
    cancelAddRelationship: function () {
      this.curRelationship = {}
      this.fresh()
      this.dialogAddRelationship = false
    },
    // 保存联系人
    saveAddRelationship: function () {
      this.curRelationship['customer_id'] = this.customer.pk
      relationship.save(this.curRelationship).then(res => {
        this.dialogAddRelationship = false
        this.fresh()
      })
    },
    // 查看联系人详情
    detailRelationship: function () {
      if (this.currentRow == null) {
        this.$message({
          message: '请选择一条记录！',
          type: 'warning'
        })
        return
      }
      // 将当前行数据赋值给当期对象
      Object.assign(this.curRelationship, this.currentRow.fields)
      this.curRelationship['id'] = this.currentRow.pk
      this.dialogAddRelationship = true
    },
    // 处理行变更
    handleCurrentChange: function (val) {
      this.currentRow = val
    }
  },
  watch: {
    // 通过监控客户信息的变化，刷新联系人列表
    customer: function (val) {
      this.fresh()
    }
  },
  created: function () {
    this.fresh()
  }
}
