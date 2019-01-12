<template>
  <div>
    <el-container>
      <el-header style="height:40px;">
        <el-row>
          <el-col :span="14" style="text-align:left;">
            <el-button type="success" size="small" icon="el-icon-plus" @click="addCustomer">添加</el-button>
            <el-button
              type="success"
              size="small"
              icon="el-icon-document"
              @click="detailCustomer"
            >详情</el-button>
            <el-button
              type="success"
              size="small"
              icon="el-icon-document"
              @click="detailRelationship"
            >联系人</el-button>
            <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteCustomer">删除</el-button>
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
          <el-form :label-position="label_position" label-width="120px">
            <el-form-item label="照片" style="width:600px;">
              <el-upload
                action="/mars_customer_center_sidecar/customer/upload_customer_image"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :data="currentRow"
                v-if="newcustomer.photo_url==null"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <img width="200px" v-else :src="newcustomer.photo_url">
            </el-form-item>
            <el-form-item label="姓名" style="width:600px;">
              <el-input v-model="newcustomer.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别">
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
        <el-dialog title="客户联系人信息" :visible.sync="dialogRelationship">
          <relationship :customer="currentRow"></relationship>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script src='./customer.js'></script>
