import relationship from '../../api/relationship'

export default {
  name: 'relationship',
  data: function () {
    return {
      tableData: [],
      currentRow: null,
      loading: false
    }
  },
  props: {
    customer: null
  },
  methods: {
    // 更新
    fresh: function () {
      this.loading = true
      this.tableData = relationship.all()
    },
    // 添加联系人
    addRelationship: function () {

    },
    // 查看联系人详情
    detailRelationship: function () {

    },
    // 处理行变更
    handleCurrentChange: function (val) {
      this.currentRow = val
    }
  },
  created () {
    console.info(JSON.stringify(this.customer))
    // this.fresh()
    this.loading = false
  }
}
