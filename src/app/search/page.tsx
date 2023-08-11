import { NewsList } from "live-news-app/components";
import fetchNews from "live-news-app/utils/fetchNews";

type Props = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search results for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
