<template>
  <Loading v-if="!filteredNews.length && !isBookmarkList" />
  <van-card
    v-else
    v-for="currentNew in filteredNews"
    :price="currentNew.source"
    :desc="currentNew.digest"
    :title="currentNew.title"
    :thumb="currentNew.imgList[0]"
    currency=""
  >
    <template #footer>
      <van-button
        size="small"
        type="primary"
        @click="
          isBookmarkNew(currentNew)
            ? deleteBookmark(currentNew)
            : addBookmark(currentNew)
        "
        >{{ isBookmarkNew(currentNew) ? "取消收藏" : "收藏" }}</van-button
      >
      <van-button size="small" @click="addHiddenNews(currentNew)"
        >隐藏</van-button
      >
    </template>
  </van-card>

  <h1 style="text-align: center" v-if="!filteredNews.length && isBookmarkList">
    暂时没有收藏
  </h1>
</template>

<script setup>
import { computed } from "vue";
import Loading from "@/ui/Loading.vue";

const props = defineProps({
  news: Array,
  bookmarkNews: Array,
  addBookmark: Function,
  deleteBookmark: Function,
  isBookmarkList: {
    type: Boolean,
    required: false,
    default: false,
  },
  hiddenNews: Array,
  addHiddenNews: Function,
});

function isHiddenNew(currentNew) {
  return props.hiddenNews.some(
    (hiddenNew) => currentNew.title === hiddenNew.title
  );
}

const filteredNews = computed(() => {
  return props.news.filter((currentNew) => isHiddenNew(currentNew) === false);
});

function isBookmarkNew(currentNew) {
  return props.bookmarkNews.some(
    (bookmarkNew) => currentNew.title === bookmarkNew.title
  );
}
</script>
