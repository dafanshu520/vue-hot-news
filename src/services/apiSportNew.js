import { getNews } from "./apiNew";

export async function getSportNews() {
  const data = await getNews(534);

  return data;
}
