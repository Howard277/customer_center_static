<template>
  <el-table :data="tableData" height="250" border style="width: 100%">
    <el-table-column prop="fields.age" label="日期" width="180"></el-table-column>
    <el-table-column prop="fields.name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="fields.sex" label="地址"></el-table-column>
  </el-table>
</template>

<script src='./first.js'></script>
