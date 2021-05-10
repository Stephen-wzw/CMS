<template>
  <div class="login-wrap">
    <form action="" class="login">
      <h1>技术博客前台管理系统</h1>
      <div class="title">登录</div>
      <div class="account input">
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div class="password input"><input type="password" placeholder="密码" /></div>
      <div class="btn-wrap">
        <input type="submit" class="btn" value="登录" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  outline: none;
  user-select: none;
}

.login-wrap {
  min-height: 100vh;
  min-width: 100vh;
  background-color: #f8f9fe;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login {
  width: 30%;
  height: 50%;

  border-radius: 0.5rem;
  background-color: #fff;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.title {
  line-height: 50px;
  height: 50px;
  width: 100%;

  margin-top: 2rem;
  cursor: pointer;
  padding: 0 2rem;
  color: #121212;
  font-weight: 600;
  font-size: 1.5rem;
  position: relative;
  text-align: left;
}

.title:after {
  display: block;
  position: absolute;
  bottom: 0;
  content: "";
  width: 3rem;
  height: 3px;
  background-color: #06f;
}

.input {
  padding: 0 2rem;
}

input {
  width: 100%;
  margin-top: 1rem;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #eee; 
}

.btn-wrap {
  display: flex;
  justify-content: center;
  padding: 0 40%;
  margin-bottom: 0.5rem;
}

.btn {
  border-radius: 0.5rem;
  background-color: rgb(65, 131, 231);
  color: #fff;
  cursor: pointer;
}
</style>
