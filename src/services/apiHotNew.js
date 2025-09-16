import { getNews } from "./apiNew";

export async function getHotNews() {
  const data = await getNews(532);

  return data;
}
