import { getNews } from "./apiNew";

export async function getEntertainmentNews() {
  const data = await getNews(533);

  return data;
}
