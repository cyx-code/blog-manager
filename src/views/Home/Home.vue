<template>
    <el-container>
        <el-aside :width="this.$store.state.isCollapse ? '64px' : '200px'">
            <nav-menu></nav-menu>
        </el-aside>
        <el-container>
            <el-header><menu-header></menu-header></el-header>
            <el-main>main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavMenu from '@/components/NavMenu/NavMenu'
import MenuHeader from '@/components/Header/Header'
export default {
  components: {
      NavMenu,
      MenuHeader
  }
}
</script>
<style lang="less" scope>
  .el-header {
        top: 0;
        margin: 0;
        border: 1px solid #eee;
        background-color: rgb(255, 255, 255);
        color: #333;
        text-align: center;
        /* 使里面的元素左右对其 */
        display: flex;
        justify-content: space-between;
        > div {
        display: flex;
        align-items: center;
        }
    }
  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    text-align: left;
  }
  
  .el-main {
    background-color: rgb(255, 255, 255);
    color: #333;
    text-align: center;
  }
  
  .el-container {
    height: 99%;
  }
 
  
</style>
