/* eslint-disable @next/next/no-img-element */
import { LiveTimestamp } from "live-news-app/components";
import { notFound } from "next/navigation";

type Props = {
  searchParams?: Article;
};
const ArticlePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;
  console.log(article);
  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10 pt-10">
        {article.image && (
          <img
            className="h-80 md:w-80 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image.replace(/"/g, "")}
            alt={article.title}
          />
        )}
        <div className="px-10">
          <h1 className="px-0 no-underline pb-2 headerTitle">
            {article.title}
          </h1>
          <div className="flex gap-y-3 flex-col sm:flex-row sm:divide-x-2 divide-double sm:space-x-4 py-5">
            <h2 className="font-bold text-sm">By: {article.author}</h2>
            <h2 className="font-bold sm:pl-3 text-sm">
              Source: {article.source}
            </h2>
            <p className="sm:pl-3 text-sm">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
