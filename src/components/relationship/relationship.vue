<template>
  <div>
    <el-container>
      <el-header style="height:40px;">
        <el-row>
          客户信息：
          <span>{{customer.fields.name}}</span>&nbsp;&nbsp;
          <span>{{customer.fields.phone_no}}</span>
        </el-row>
        <el-row style="text-align:left;">
          <el-button type="success" size="small" icon="el-icon-plus" @click="addRelationship">添加</el-button>
          <el-button
            type="success"
            size="small"
            icon="el-icon-document"
            @click="detailRelationship"
          >详情</el-button>
        </el-row>
      </el-header>
      <el-main>
        <!--联系人列表 start-->
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
          <el-table-column prop="fields.name" label="姓名"></el-table-column>
          <el-table-column prop="fields.sexname" label="性别"></el-table-column>
          <el-table-column prop="fields.age" label="年龄"></el-table-column>
          <el-table-column prop="fields.id_card_no" label="身份证号"></el-table-column>
          <el-table-column prop="fields.passport_no" label="护照号"></el-table-column>
          <el-table-column prop="fields.phone_no" label="电话号码"></el-table-column>
          <el-table-column prop="fields.phone_no_2" label="备用电话号码"></el-table-column>
          <el-table-column prop="fields.home_address" label="家庭住址"></el-table-column>
        </el-table>
        <!--联系人列表 end-->
      </el-main>
    </el-container>
    <el-dialog title="新增客户联系人" :visible.sync="dialogAddRelationship" append-to-body>
      <el-form label-width="120px">
        <el-form-item label="姓名" style="width:600px;">
          <el-input v-model="curRelationship.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="curRelationship.sex" label="man" border>男</el-radio>
          <el-radio v-model="curRelationship.sex" label="woman" border>女</el-radio>
        </el-form-item>
        <el-form-item label="年龄" style="width:600px;">
          <el-input v-model="curRelationship.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" style="width:600px;">
          <el-input v-model="curRelationship.id_card_no" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="护照号" style="width:600px;">
          <el-input v-model="curRelationship.passport_no" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" style="width:600px;">
          <el-input v-model="curRelationship.phone_no" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备用电话号码" style="width:600px;">
          <el-input v-model="curRelationship.phone_no_2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" style="width:600px;">
          <el-input v-model="curRelationship.home_address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAddRelationship">取 消</el-button>
        <el-button type="primary" @click="saveAddRelationship">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script src='./relationship.js'></script>
