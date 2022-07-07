<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="$emit('close')">
      <template #left> <van-icon name="cross" /></template
    ></van-nav-bar>
    <CommentItem :item="comment" class="comment"></CommentItem>
    <van-cell title="全部回复" />
    <CommentItem
      :item="item"
      v-for="item in list"
      :key="item.com_id"
    ></CommentItem>
    <div class="comment1"></div>
    <div class="buttom">
      <van-button
        plain
        type="primary"
        block
        round
        @click="isAddCommentShow = true"
        >评论</van-button
      >
    </div>
    <van-popup position="bottom" v-model="isAddCommentShow"
      ><AddComment
        :target="comment.com_id"
        :art_id="$router.params.article_id"
        v-if="isAddCommentShow"
        @add-comment="
          list.unshift($event);
          isAddCommentShow = false;
          // eslint-disable-next-line vue/no-mutating-props
          comment.reply_count++;
        "
      >
      </AddComment
    ></van-popup>
  </div>
</template>

<script>
import AddComment from './AddComment.vue'
import { getCommentList } from '@/api/comment'
import CommentItem from './ArticleItem.vue'
export default {
  props: {
    comment: {
      type: Object,
      default: () => ({})
    }
  },
  created () { },
  data () {
    return {
      offset: null,
      limit: 10,
      list: [],
      isAddCommentShow: false
    }
  },
  methods: {
    async getCommentList () {
      try {
        const res = await getCommentList({
          type: 'c', source: this.comment.com_id, offset: this.offset, limit: this.limit
        })
        console.log(res)
        this.list = res.data.data.results
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    title () {
      const count = this.comment.reply_count
      if (this.comment.reply_count === 0) {
        return '暂无回复'
      } else {
        return count + '条回复'
      }
    }
  },
  watch: {},
  filters: {},
  components: { CommentItem, AddComment }
}
</script>

<style scoped lang='less'>
.comment {
  margin-top: 92px;
}
.buttom {
  width: 750px;
  position: fixed;
  bottom: 0;
  padding: 10px 30px;
  box-sizing: border-box;
  background-color: pink;
}
.comment {
  margin-bottom: 110px;
}
</style>
