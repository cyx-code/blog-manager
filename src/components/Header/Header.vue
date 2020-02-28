<template>
     <div class="menu-header">
        <div>
            <i class="el-icon-tickets" @click="toggleCollapse"></i>
            <breadcrum></breadcrum>
        </div>
        <div class="user">
            <img src="../../assets/logo.png" alt=" /">
        </div>
    </div>
</template>

<script>
import Breadcrum from '../Breadcrum/Breadcrum'
export default {
    components: {
        Breadcrum
    },
    methods: {
        toggleCollapse() {
            this.$store.commit('changeCollapse')
        }
    }
}
</script>

<style lang="less">
    .menu-header {
        width: 100%;
        top: 0;
        margin: 0;
        border: 0px;
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
    .el-icon-tickets {
        margin-right: 10px;
        cursor: pointer;
    }
    .user {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 50%;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
  }
</style>