<template>
  <div>
    <el-menu
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#409BFF"
    :unique-opened="true"
    :collapse="this.$store.state.isCollapse"
    :collapse-transition="false">
      <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>{{item.authName}}</span>
        </template>
        <el-menu-item :index="subItem.id + ''" v-for="subItem in item.children" :key="subItem.id">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>{{subItem.authName}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  created() {
    this.getMenuList()
  },
  data() {
    return {
      // 左侧菜单数据
      menuList: [],
      iconObj: {

      }
    }
  },
  methods: {
    async getMenuList() {
      const {data: res} = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta)
      this.menuList = res.data
      
      console.log(res)
    }
  }
}
</script>

<style lang="less">
  .el-menu {
    border: 0px;
  }
</style>