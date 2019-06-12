<template>
  <div class='login-form'>
    <p class='login-form__title'>{{ $t('login.title') }}</p>
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: $t('login.error.username') }] }
          ]"
          :placeholder="$t('login.username')"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: $t('login.error.password') }] }
          ]"
          type="password"
          :placeholder="$t('login.password')"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button"
          block
        >
          {{ $t('login.btn') }}
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          $Message.success('登陆成功', 1)
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
.login-form {
  padding: 20px;
}

.login-form__title {
  font-size: 24px;
  text-align: center;
}
</style>