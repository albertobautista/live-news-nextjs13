import { NewsList } from "live-news-app/components";
import { categories } from "live-news-app/constants";
import fetchNews from "live-news-app/utils/fetchNews";

export default async function HomePage() {
  const news: NewsResponse = await fetchNews(
    categories.filter((category) => category !== "general").join(",")
  );

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
