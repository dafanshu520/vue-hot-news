<template>
  <NewList
    :news="bookmarkNews"
    :deleteBookmark
    :addBookmark
    :bookmarkNews
    :isBookmarkList="true"
    :addHiddenNews
    :hiddenNews
  />
</template>

<script setup>
import NewList from "@/ui/NewList.vue";

defineProps([
  "bookmarkNews",
  "deleteBookmark",
  "addBookmark",
  "hiddenNews",
  "addHiddenNews",
]);
</script>
