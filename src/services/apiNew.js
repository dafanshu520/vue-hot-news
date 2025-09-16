import { getConfig } from "@/utils/configHelper";

export async function getNews(typeId) {
  const API_URL = getConfig("API_URL");
  const APP_SECRET = getConfig("APP_SECRET");
  const APP_ID = getConfig("APP_ID");

  const response = await fetch(
    `${API_URL}?typeId=${typeId}&page=1&app_id=${APP_ID}&app_secret=${APP_SECRET}`
  );
  const data = await response.json();

  return data.data;
}
