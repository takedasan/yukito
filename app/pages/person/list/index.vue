<template>
  <div>
    <el-row>
      <h1 style="float: left">契約社員一覧</h1>
      <el-button style="float: right; margin-top: 15px" icon="el-icon-document">
        エクスポート
      </el-button>
    </el-row>

    <el-form :inline="true">
      <el-form-item>
        <el-input placeholder="社員番号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="名前"></el-input>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          type="daterange"
          range-separator="To"
          start-placeholder="生年月日 Start"
          end-placeholder="生年月日 End"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="備考"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">検索</el-button>
      </el-form-item>
    </el-form>
    <el-table stripe border height="780" :data="tableData" style="width: 100%">
      <el-table-column width="80">
        <router-link to="/person/edit">
          <el-button size="mini">編集</el-button>
        </router-link>
      </el-table-column>
      <el-table-column label="顔写真" width="110">
        <template slot-scope="scope">
          <img :src="scope.row.imageUrl" class="image" />
        </template>
      </el-table-column>
      <el-table-column label="社員番号" width="100">
        <template slot-scope="scope">
          <p>{{ scope.row.staffCode }}</p>
        </template>
      </el-table-column>
      <el-table-column label="名前" width="140">
        <template slot-scope="scope">
          <p>{{ scope.row.name }}</p>
        </template>
      </el-table-column>
      <el-table-column label="生年月日" width="110">
        <template slot-scope="scope">
          <p>{{ scope.row.birthday }}</p>
        </template>
      </el-table-column>
      <el-table-column label="年齢" width="80">計算</el-table-column>
      <el-table-column label="連絡先" width="200">
        <template slot-scope="scope">
          <p>{{ scope.row.contact }}</p>
        </template>
      </el-table-column>
      <el-table-column label="住所" width="300">
        <template slot-scope="scope">
          <p>{{ scope.row.address }}</p>
        </template>
      </el-table-column>
      <el-table-column label="備考">
        <template slot-scope="scope">
          <p>{{ scope.row.memo }}</p>
        </template>
      </el-table-column>
      <el-table-column width="170">
        <el-link type="primary">契約</el-link>
        <el-link type="primary">労働時間</el-link>
        <el-link type="primary">支払い</el-link>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tableData: [
        {
          imageUrl: 'http://placehold.jp/80x100.png',
          staffCode: 'A00001',
          name: 'テスト 太郎',
          birthday: '2000/01/01',
          contact: 'taro@test★com',
          address: '東京都中野区ほにゃほにゃほにゃ',
          memo: '好きな飲み物は日本茶'
        },
        {
          imageUrl: 'http://placehold.jp/80x100.png',
          staffCode: 'A00002',
          name: 'テスト 次郎',
          birthday: '2000/01/02',
          contact: 'jiro@test★com',
          address: '東京都江東区ほにゃほにゃほにゃ',
          memo: ''
        },
        {
          imageUrl: 'http://placehold.jp/80x100.png',
          staffCode: 'A00003',
          name: 'テスト 三郎',
          birthday: '2000/01/03',
          contact: 'saburo@test★com',
          address: '東京都渋谷区ほにゃほにゃほにゃ',
          memo: '好きなおやつはすあま'
        },
        {
          imageUrl: 'http://placehold.jp/80x100.png',
          staffCode: 'A00004',
          name: 'テスト 四郎',
          birthday: '2000/01/04',
          contact: 'shiro@test★com',
          address: '東京都港区ほにゃほにゃほにゃ',
          memo: ''
        }
      ]
    }
  }
})
</script>
