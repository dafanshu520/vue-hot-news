import { getItem, setItem } from "@/utils/localstorageHelper";
import { ref } from "vue";

export function useToggleBookmark() {
  const showBookmark = ref(false);

  function toggleShowBookmark() {
    showBookmark.value = !showBookmark.value;
  }

  return { showBookmark, toggleShowBookmark };
}

export function useBookmark() {
  const bookmarkNews = ref(getItem("bookmark") || []);

  function addBookmark(bookmarkNew) {
    bookmarkNews.value = [...new Set([...bookmarkNews.value, bookmarkNew])];

    setItem("bookmark", bookmarkNews.value);
  }

  function deleteBookmark(deleteNew) {
    bookmarkNews.value = bookmarkNews.value.filter(
      (item) => item.title !== deleteNew.title
    );

    setItem("bookmark", bookmarkNews.value);
  }

  return { bookmarkNews, addBookmark, deleteBookmark };
}
