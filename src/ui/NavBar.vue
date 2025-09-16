<template>
  <van-nav-bar
    title="热点新闻"
    right-text="刷新"
    :left-text="leftText"
    @click-right="handleRefresh"
    @click-left="toggleShowBookmark"
  />
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["toggleShowBookmark", "showBookmark"]);

const leftText = computed(() => (props.showBookmark ? "返回" : "收藏"));

function handleRefresh() {
  window.location.reload();
}
</script>
