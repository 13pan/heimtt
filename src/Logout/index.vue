<template>
  <div>
    <van-nav-bar title="登录">
      <van-icon name="cross" slot="left" />
    </van-nav-bar>
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model.trim="mobile"
        name="mobile"
        placeholder="手机号"
        :rules="[
          { required: true, message: '请输入手机号' },
          {
            pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
            message: '不符合手机号格式',
          },
        ]"
        ><i class="toutiao toutiao-shouji" slot="left-icon"></i
      ></van-field>
      <van-field
        v-model.trim="code"
        type="password"
        name="code"
        placeholder="验证码"
        :rules="[
          { required: true, message: '请输入验证码' },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式不正确',
          },
        ]"
        ><i class="toutiao toutiao-yanzhengma" slot="left-icon"></i>
        <template #button>
          <van-count-down v-if="isCountDown" :time="time" format=" ss s" />
          <van-button
            v-else
            @click="onSendSms"
            size="small"
            type="default"
            round
            native-type="button"
            @finish="isCountDown = false"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { getSmsCode, login } from '@/api/users'
export default {
  created () { },
  data () {
    return {
      mobile: '13911111111', // 手机号
      code: '246810', // 短信验证码
      time: 10 * 1000,
      isCountDown: false
    }
  },
  methods: {
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('setUser', res.data.data)
      } catch (err) {
        console.log(err)
      }
      console.log('submit', values)
    },
    async onSendSms () {
      try {
        await this.$refs.form.validate('mobile')
        console.log('校验通过')
        this.isCountDown = true
        try {
          await getSmsCode(this.mobile)
          this.$toast.success('发送成功')
        } catch (err) {
          this.$toast.fail('发送失败')
        }
      } catch (err) {
        console.log('校验失败')
        this.$toast.fail('验证失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.toutiao {
  font-size: 37px;
}
.van-button--default {
  background-color: #ededed;
}
</style>
