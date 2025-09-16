import { ref } from "vue";

export function useHideNew() {
  const hiddenNews = ref([]);

  function addHiddenNews(hiddenNew) {
    hiddenNews.value = [...hiddenNews.value, hiddenNew];
  }

  return { hiddenNews, addHiddenNews };
}
