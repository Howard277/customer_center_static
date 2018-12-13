<template>
    <div>
    <el-container>
      <el-header style="height:40px;">
        <el-row>
          <el-col :span="14" style="text-align:left;">
            <el-button type="success" size="small" icon="el-icon-plus" @click="addOrder">添加</el-button>
            <el-button
              type="success"
              size="small"
              icon="el-icon-document"
              @click="detailOrder"
            >详情</el-button>
          </el-col>
          <el-col :span="10">
            <el-input
              placeholder="搜索：姓名、身份证号、护照号、电话号码、备用电话号码、家庭住址"
              v-model="condition"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search" @click="search">搜索</el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!--订单列表 start-->
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
          <el-table-column prop="pk" label="订单编号"></el-table-column>
          <el-table-column prop="fields.card_no" label="身份证号" width="180"></el-table-column>
          <el-table-column prop="fields.customer_name" label="客户姓名"></el-table-column>
          <el-table-column prop="fields.order_status" label="订单状态"></el-table-column>
          <el-table-column prop="fields.create_time" label="创建时间"></el-table-column>
          <el-table-column prop="fields.create_user" label="创建人"></el-table-column>
          <el-table-column prop="fields.update_time" label="更新时间"></el-table-column>
          <el-table-column prop="fields.update_user" label="更新人"></el-table-column>
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
        <!--订单列表 end-->
        <!--新增客户 对话框 start-->
        <el-dialog title="新增订单" :visible.sync="dialogOrder">
          <el-form :label-position="label_position" label-width="120px">
            <el-form-item label="身份证号" style="width:600px;">
              <el-input v-model="currentOrder.card_no" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="客户姓名" style="width:600px;">
              <el-input v-model="currentOrder.customer_name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cancelOrder">取 消</el-button>
            <el-button type="primary" @click="saveOrder">确 定</el-button>
          </div>
        </el-dialog>
        <!--新增客户 对话框 end-->
      </el-main>
    </el-container>
  </div>
</template>
<script src='./order.js'></script>
