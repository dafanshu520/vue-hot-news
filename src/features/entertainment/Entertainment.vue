<template>
  <NewList
    :news
    :bookmarkNews
    :addBookmark
    :deleteBookmark
    :addHiddenNews
    :hiddenNews
  />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getEntertainmentNews } from "@/services/apiEntertainmentNew.js";

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
  const data = await getEntertainmentNews();

  news.value = data;
});
</script>
