<template>
  <NewList
    :news
    :bookmarkNews
    :addBookmark
    :deleteBookmark
    :hiddenNews
    :addHiddenNews
  />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getHotNews } from "@/services/apiHotNew.js";

import NewList from "@/ui/NewList.vue";

defineProps([
  "bookmarkNews",
  "addBookmark",
  "deleteBookmark",
  "hiddenNews",
  "addHiddenNews",
]);

const news = ref([]);

onMounted(async () => {
  const data = await getHotNews();

  news.value = data;
});
</script>
