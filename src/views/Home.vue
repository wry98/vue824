<template>
  <div class="home">
   <el-container class="container">
  <el-header class="header">
    <el-row>
      <el-col :span="4">
        <div  class="grid-content bg-purple">
           <img id="logo" src="../assets/logo1.png" alt="无法显示图片">
        </div>
      </el-col>
        <el-col :span="18" class="middle">
          <div class="grid-content bg-purple">
          <h3>成都浩辰星晟系统管理后台</h3>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a class="loginout" href="../components/Login.vue">退出</a>
          </div>
        </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="200px" class="aside">
      <!-- 侧边栏导航 -->
       <el-menu
        :unique-opened="true"      
        :router="true"
       >
         <!-- 首页 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
        <el-menu-item-group>                
          <el-menu-item index="About">
            <span> 详情</span>                  
            </el-menu-item>     
        </el-menu-item-group>         
      </el-submenu>
       <!-- 工作管理 -->
       <el-submenu index="2">
        <template slot="title" >
          <i class="el-icon-location"></i>
          <span>工作管理</span>
        </template>
        <el-menu-item-group>       
          <el-menu-item index="Work">详情
            </el-menu-item>       
        </el-menu-item-group>         
      </el-submenu>
       <!-- 求职者管理 -->
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>求职者管理</span>
        </template>
        <el-menu-item-group>       
          <el-menu-item index="Jobhunter">详情</el-menu-item>       
        </el-menu-item-group>         
      </el-submenu>
      <!-- 分类管理 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类管理</span>
        </template>
        <el-menu-item-group>       
          <el-menu-item index="Classify">详情</el-menu-item>       
        </el-menu-item-group>                
      </el-submenu>
      <!-- 用户管理  -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理 </span>
        </template>
        <el-menu-item-group>       
          <el-menu-item index="User">详情</el-menu-item>       
        </el-menu-item-group>                
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main class="main">
      <router-view></router-view>
      </el-main>
  </el-container>
</el-container>


  
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  data() {
    return {

    }; 
  },
  methods: {
    
  }
};
</script>
<style  scoped>
  .container{
    /* 页面的高度 */
    height: 950px;
  }
.header{
  background-color: #b3c0d1;

}
.aside{
 background-color: #b3dce6;
 

}
.main{
 background-color: #e9eef3;

}
/* 头部 */
.middle{
  text-align: center;
}
.loginout{
line-height: 60px;
text-decoration: none;
color:black;

}
/* 导航logo */
#logo{
width: auto;
height: 60px;
margin-left: 40px;
}
</style>
