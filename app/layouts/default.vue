<template>
  <el-container>
    <el-header height="30px">
      Yukito
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :router="true">
          <div style="margin-top: 10px;margin-bottom: 10px">
            <span>契約社員</span>
          </div>
          <el-menu-item index="/person/list" :route="{ path: `/person/list` }">
            契約社員一覧
          </el-menu-item>
          <el-menu-item index="/person/edit" :route="{ path: `/person/edit` }">
            契約社員編集
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main style="padding-top:0px">
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
