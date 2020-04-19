import { articles_url, APIKEY, countrycode } from "./rest";

export async function getArticles(category = "general") {
  try {
    let articles = await fetch(
      `${articles_url}?country=${countrycode}&category=${category}`,
      { headers: { "X-API-KEY": APIKEY } }
    );
    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (error) {
    throw error;
  }
}
