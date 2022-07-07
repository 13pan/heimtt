<template>
  <!-- 节流 -->
  <van-loading v-if="isLoading" size=".53333rem" />
  <van-icon
    v-else
    color="#777"
    :name="is_collected ? 'star' : 'star-o'"
    @click="onClick"
  />
</template>

<script>
import { delCollect, addCollect } from '@/api/article'
export default {
  name: 'CollectArticle',
  props: {
    is_collected: {
      type: Boolean,
      required: true
    }
  },
  created () { },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {

    async onClick () {
      this.isLoading = true
      const target = this.$router.params.article_id
      if (this.is_collected) {
        try {
          await delCollect(target)
          this.$emit('updata:is_collected', !this.is_collected)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await addCollect(target)
          this.$emit('updata:is_collected', !this.is_collected)
        } catch (err) {
          console.log(err)
        }
      }
      this.isLoading = false
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
