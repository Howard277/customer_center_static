<template>
  <div>
    <el-container>
      <el-header style="height:40px;">
        <el-row style="text-align:left;">
          <el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
          <el-button type="success" size="small" icon="el-icon-plus" @click="addCustomer">添加</el-button>
          <el-button type="success" size="small" icon="el-icon-document" @click="detailCustomer">详情</el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteCustomer">删除</el-button>
        </el-row>
      </el-header>
      <el-main>
        <!--客户列表 start-->
        <el-table
          :data="tableData"
          height="550"
          border
          style="width: 100%"
          stripe
          highlight-current-row
          @current-change="handleCurrentChange"
          v-loading="loading"
        >
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column prop="fields.name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="fields.sex" label="性别"></el-table-column>
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
          <el-form :label-position="left" label-width="80px" :model="formLabelAlign">
            <el-form-item label="客户姓名" style="width:300px;">
              <el-input v-model="newcustomer.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="客户性别" style="width:300px;">
              <el-radio v-model="newcustomer.sex" label="man" border>男</el-radio>
              <el-radio v-model="newcustomer.sex" label="woman" border>女</el-radio>
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
