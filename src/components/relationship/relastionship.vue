<template>
  <div>
    <!-- <el-container>
      <el-header style="height:40px;">
        <el-row>
          <el-button type="success" size="small" icon="el-icon-plus" @click="addRelationship">添加</el-button>
          <el-button
            type="success"
            size="small"
            icon="el-icon-document"
            @click="detailRelationship"
          >详情</el-button>
        </el-row>
      </el-header>
      <el-main> -->
        <div>
            客户信息：
            <span>{{customer.fields.name}}</span>&nbsp;&nbsp;
            <span>{{customer.fields.phone_no}}<span>
        </div>
        <!--联系人列表 start-->
        <!-- <el-table
          :data="tableData"
          border
          style="width: 100%"
          stripe
          highlight-current-row
          @current-change="handleCurrentChange"
          v-loading="loading"
        >
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="fields.name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="fields.sexname" label="性别"></el-table-column>
          <el-table-column prop="fields.age" label="年龄"></el-table-column>
          <el-table-column prop="fields.id_card_no" label="身份证号"></el-table-column>
          <el-table-column prop="fields.passport_no" label="护照号"></el-table-column>
          <el-table-column prop="fields.phone_no" label="电话号码"></el-table-column>
          <el-table-column prop="fields.phone_no_2" label="备用电话号码"></el-table-column>
          <el-table-column prop="fields.home_address" label="家庭住址"></el-table-column>
        </el-table> -->
        <!--联系人列表 end-->
      <!-- </el-main>
    </el-container> -->
  </div>
</template>
<script src='./relastionship.js'></script>
