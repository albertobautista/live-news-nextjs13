import { NewsList } from "live-news-app/components";
import { categories } from "live-news-app/constants";
import fetchNews from "live-news-app/utils/fetchNews";

type Props = {
  params: { category: Category };
};

const NewsCategoryPage = async ({ params: { category } }: Props) => {
  const news = await fetchNews(category);
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategoryPage;

export async function generateStaticParams() {
  return categories.map((category) => ({ category }));
}
