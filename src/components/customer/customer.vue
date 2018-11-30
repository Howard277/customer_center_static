<template>
  <div>
    <el-container>
      <el-header style="height:40px;">
        <el-row style="text-align:left;">
          <el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
          <el-button type="success" size="small" icon="el-icon-plus">添加</el-button>
          <el-button type="info" size="small" icon="el-icon-document">详情</el-button>
          <el-button type="danger" size="small" icon="el-icon-delete">删除</el-button>
        </el-row>
      </el-header>
      <el-main>
        <el-table
          :data="tableData"
          height="250"
          border
          style="width: 100%"
          stripe
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="fields.name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="fields.sex" label="性别"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script src='./customer.js'></script>
