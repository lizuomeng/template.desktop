<template>
  <div>
    <div class='login-box'>
      <login-form></login-form>
    </div>
  </div>
</template>

<script>
import { LoginForm } from '@/components'

export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="less" scoped>
.login-box {
  position: absolute;
  top: 20%;
  right: 20%;

  width: 300px;
  height: 300px;
  background: skyblue;
  border-radius: 20px;
}
</style>