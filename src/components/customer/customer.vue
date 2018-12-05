<template>
  <div>
    <el-container>
      <el-header style="height:40px;">
        <el-row style="text-align:left;">
          <el-col :span="18">
            <el-button type="success" size="small" icon="el-icon-plus" @click="addCustomer">添加</el-button>
            <el-button
              type="success"
              size="small"
              icon="el-icon-document"
              @click="detailCustomer"
            >详情</el-button>
            <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteCustomer">删除</el-button>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="搜索：姓名" v-model="condition" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!--客户列表 start-->
        <el-table
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
        </el-table>
        <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :page-sizes="[10, 20, 30, 40]"
          :total="page.total"
          :page-size="page.pagesize"
          :current-page="page.currentpage"
          @size-change="handlePageSizeChange"
          @current-change="handleCurrentPageChange"
        ></el-pagination>
        <!--客户列表 end-->
        <!--新增客户 对话框 start-->
        <el-dialog title="新增客户" :visible.sync="dialogFormAddCustomer">
          <el-form :label-position="left" label-width="120px" :model="formLabelAlign">
            <el-form-item label="姓名" style="width:600px;">
              <el-input v-model="newcustomer.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" style="text-align:left;">
              <el-radio v-model="newcustomer.sex" label="man" border>男</el-radio>
              <el-radio v-model="newcustomer.sex" label="woman" border>女</el-radio>
            </el-form-item>
            <el-form-item label="年龄" style="width:600px;">
              <el-input v-model="newcustomer.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" style="width:600px;">
              <el-input v-model="newcustomer.id_card_no" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="护照号" style="width:600px;">
              <el-input v-model="newcustomer.passport_no" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" style="width:600px;">
              <el-input v-model="newcustomer.phone_no" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="备用电话号码" style="width:600px;">
              <el-input v-model="newcustomer.phone_no_2" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址" style="width:600px;">
              <el-input v-model="newcustomer.home_address" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cancelAddCustomer">取 消</el-button>
            <el-button type="primary" @click="saveAddCustomer">确 定</el-button>
          </div>
        </el-dialog>
        <!--新增客户 对话框 end-->
      </el-main>
    </el-container>
  </div>
</template>

<script src='./customer.js'></script>
