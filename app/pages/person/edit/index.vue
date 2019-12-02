<template>
  <div>
    <el-row>
      <h1>契約社員編集</h1>
      <el-button type="primary" @click="onSave">保存</el-button>
    </el-row>
    <el-card class="box-card">
      <el-form label-width="120px" :model="contractEmployee">
        <el-form-item label="顔写真">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="contractEmployee.imageUrl"
              :src="contractEmployee.imageUrl"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="社員番号">
          <el-input v-model="contractEmployee.staffCode"></el-input>
        </el-form-item>
        <el-form-item label="名前">
          <el-input v-model="contractEmployee.name"></el-input>
        </el-form-item>
        <el-form-item label="生年月日">
          <el-date-picker
            v-model="contractEmployee.birthday"
            type="date"
            placeholder="生年月日"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="年齢">
          <el-input v-model="contractEmployee.age"></el-input>
        </el-form-item>
        <el-form-item label="連絡先">
          <el-input v-model="contractEmployee.contact"></el-input>
        </el-form-item>
        <el-form-item label="住所">
          <el-input v-model="contractEmployee.address"></el-input>
        </el-form-item>
        <el-form-item label="備考">
          <el-input
            v-model="contractEmployee.memo"
            type="textarea"
            :rows="3"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  ElUploadInternalFileDetail,
  ElUploadInternalRawFile
} from 'element-ui/types/upload'
import { db } from '~/plugins/firebase.ts'

export default Vue.extend({
  data: () => ({
    contractEmployee: {
      imageUrl: '',
      staffCode: '',
      name: '',
      birthday: '',
      age: '',
      contact: '',
      address: '',
      memo: ''
    }
  }),
  methods: {
    handleAvatarSuccess(file: ElUploadInternalFileDetail) {
      this.contractEmployee.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file: ElUploadInternalRawFile) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      return isJPG && isLt2M
    },
    onSave() {
      const contractEmployees = db.collection('contract-employees')
      contractEmployees.add(this.contractEmployee)
    }
  }
})
</script>

<style lang="scss" scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 175px;
}
.avatar-uploader {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.box-card {
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 800px;
}
</style>
