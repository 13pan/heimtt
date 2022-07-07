<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem
        v-for="item in commentList"
        :key="item.com_id"
        :item="item"
        @replay-show="$emit('replay-show',$event)"
      ></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/views/Article/components/ArticleItem.vue'
import { getCommentList } from '@/api/comment'
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator (value) {
        return ['a', 'c'].includes(value)
      }
    },
    source: {
      type: String,
      required: true
    },
    commentList: {
      type: Array,
      required: true
    }
  },
  created () { this.getCommentList() },
  data () {
    return {
      loading: false,
      finished: false,
      paramsObj: {
        source: this.source,
        type: this.type,
        limit: 5,
        offset: null
      }
      // commentList: []
    }
  },
  methods: {
    // 评论列表
    async getCommentList () {
      try {
        const res = await getCommentList(this.paramsObj)
        console.log(res)
        // 数据是否全部加载完
        if (res.data.data.results.length === 0) {
          this.finished = true
        }
        // 追加数据
        // eslint-disable-next-line vue/no-mutating-props
        this.commentList.push(...res.data.data.results)
        this.$emit('set-count', res.data.data.total_count)
        // 返回结果最后一评论id为下一页offset的参数值
        this.paramsObj.offset = res.data.data.last_id
        // 拿回数据停止转圈加载
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    },
    onLoad () {
      this.getCommentList()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { ArticleItem }
}
</script>

<style scoped lang='less'>
.publish-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.van-list {
  margin-bottom: 45px;
}
</style>
