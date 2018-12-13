<template>
  <div>
    <label>Welcome to customer center</label>
    <br>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function () {
      this.$message('登录')
      this.$emit('login_notice')
    },
    cancel: function () {
      this.name = ''
      this.password = ''
    }
  }
}
</script>
