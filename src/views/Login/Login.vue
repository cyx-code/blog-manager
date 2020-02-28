<template>
    <div class="login-container">
        <!-- 头像区域 -->
        <div class="login_box">
            <div class="avatar_box">
                <img src="../../assets/logo.png" alt=""/>
            </div>
            <!-- 登录表单区域 -->
            <el-form 
                :model="loginForm"
                :rules="loginRules"
                ref="loginFormRef"
                 class="login-form">
                <el-form-item class="login-item" prop="username">
                    <el-input 
                        v-model="loginForm.username"
                         prefix-icon="iconfont icon-user"
                          placeholder="用户名">
                    </el-input>
                </el-form-item>

                <el-form-item class="login-item" prop="password">
                    <el-input 
                        type="password" 
                        v-model="loginForm.password" 
                        prefix-icon="iconfont icon-3702mima" 
                        placeholder="密码">
                    </el-input>
                </el-form-item>

                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123456'
            },
            loginRules: {
                // 验证用户名是否合法
                username: [
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {min: 3, max: 10, message: '长度在3到10个字符之间', trigger: 'blur'}
                ],
                // 验证密码是否合法
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 20, message: '长度在6到20之间', trigger: 'blur'}
                ]
            } 

        }
    },
    methods: {
        login() {
            // 校验登录信息，
            this.$refs.loginFormRef.validate(async valid => {
                if (!valid) {
                    return;
                }
                // await可以简化promise对象，但是必须与async一同使用
                const { data: res } = await this.$http.post('login', this.loginForm)
                if (res.meta.status !== 200) {
                    this.$message.error('登录失败'); 
                }
                this.$message.success('登录成功'); 
                window.sessionStorage.setItem('token', res.data.token);
                this.$router.replace('/home')
            }) 
        },
        resetLoginForm() {
            this.$refs.loginFormRef.resetFields();
        },
    
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .login-container {
      background-color: #2b4b6b;
      height: 100%;
  }

  .login_box {
      width: 32%;
      height: 40%;
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
  }
  .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #eee;
      }
  }
  .login-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
  }
  .login-item {
      position: relative;
      left: 50%;
      width: 80%;
      transform: translate(-50%);
  }
  .btns {
      display: flex;
      justify-content: flex-end;
  }
</style>
