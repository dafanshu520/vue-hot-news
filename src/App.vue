<template>
  <NavBar :toggleShowBookmark :showBookmark />

  <div v-show="!showBookmark">
    <van-tabs v-model:active="currentComponent">
      <van-tab title="热点" name="Hot"></van-tab>
      <van-tab title="运动" name="Sport"></van-tab>
      <van-tab title="金融" name="Finance"></van-tab>
      <van-tab title="娱乐" name="Entertainment"></van-tab>
    </van-tabs>

    <KeepAlive>
      <component
        :is="componentMap[currentComponent]"
        :bookmarkNews
        :addBookmark
        :deleteBookmark
        :hiddenNews
        :addHiddenNews
      />
    </KeepAlive>

    <van-back-top />
  </div>

  <div v-show="showBookmark">
    <BookMark
      :bookmarkNews
      :deleteBookmark
      :addBookmark
      :addHiddenNews
      :hiddenNews
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Hot from "@/features/hot/Hot.vue";
import Finance from "@/features/finance/Finance.vue";
import Sport from "@/features/sport/Sport.vue";
import Entertainment from "@/features/entertainment/Entertainment.vue";

import NavBar from "@/ui/NavBar.vue";
import BookMark from "@/features/bookmark/Bookmark.vue";

import { useBookmark, useToggleBookmark } from "./hooks/bookmark";
import { useHideNew } from "./hooks/hideNew";

const currentComponent = ref("Hot");
const componentMap = {
  Hot,
  Finance,
  Sport,
  Entertainment,
};

const { showBookmark, toggleShowBookmark } = useToggleBookmark();
const { bookmarkNews, addBookmark, deleteBookmark } = useBookmark();
const { hiddenNews, addHiddenNews } = useHideNew();
</script>
