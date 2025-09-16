import { getNews } from "./apiNew";

export async function getFinanceNews() {
  const data = await getNews(535);

  return data;
}
