<template>
  <div class="container-login">
    <el-card class="my-card">
      <img src="../../assets/logo_index.png">
      <!-- 表单 -->
      <el-form ref="loginForm":model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px;margin-right:8px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- :value="true" 选中复选框不能进行修改  必须同意 -->
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login()" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'app-login',
    data() {
      //自定义校验手机号的函数
      const checkMobile = (rule,value,callback) =>  {
        //进行校验 （1开头，第二位3-9数字其余剩下9位数字）
        if(!/^1[3-9]\d{9}$/.test(value)){
          // 校验失败
          callback(new Error('手机号格式错误'))
        }else{
          //校验成功
          callback()
        }
      }
      return {
        loginForm: {
          mobile: '',
          code: ''
        },
        //表单对应的检验规则
        loginRules:{
          mobile:[
            {
              // required 是否必填    message提示信息   trigger 触发校验的时机
              required:true, message:'请输入手机号',trigger:'blur'
            },
            {
              validator:checkMobile,trigger:'blur'
              }
          ],
         code:[
            {
              // required 是否必填    message提示信息   trigger 触发校验的时机
              required:true, message:'请输入验证码',trigger:'blur'
            },
            {
              //len 字符长度  min max 指定字符串范围
              len:6,message:'请输入6位验证码',trigger:'blur'
            }

          ]
      }
    }
  },
  methods:{
    login(){
      //对整体表单校验
      this.$refs.loginForm.validate((valid) => {
        //valid值 true 校验成功
        if(valid){
          //TODO进行登录
          }
      })
    }
  }
  }
</script>

<style scoped lang="less">
  .container-login {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(../../assets/login_bg.jpg);
    background-size: cover;

    .my-card {
      width: 400px;
      height: 350px;
      transform: translate(-50%, -60%);
      position: absolute;
      left: 50%;
      top: 50%;

      img {
        width: 200px;
        display: block;
        margin: 0 auto 20px;

      }
    }
  }
</style>
