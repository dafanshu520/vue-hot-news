<template>
  <NewList :news :bookmarkNews :addBookmark :deleteBookmark />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getSportNews } from "@/services/apiSportNew";

import NewList from "@/ui/NewList.vue";

defineProps(["bookmarkNews", "addBookmark", "deleteBookmark"]);
const news = ref([]);

onMounted(async () => {
  const data = await getSportNews();

  news.value = data;
});
</script>
