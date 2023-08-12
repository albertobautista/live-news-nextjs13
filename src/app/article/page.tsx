/* eslint-disable @next/next/no-img-element */
import { LiveTimestamp } from "live-news-app/components";
// import { notFound } from "next/navigation";

type Props = {
  searchParams?: Article;
};
const ArticlePage = ({ searchParams }: Props) => {
  // if (
  //   (searchParams && Object.entries(searchParams).length === 0) ||
  //   !searchParams
  // ) {
  //   return <h1 className="text-3xl pt-5 text-center">No results</h1>;
  // }

  const article: Article = searchParams!;
  return (
    <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10 pt-10">
      {article.image && (
        <img
          className="h-80 px-2 w-full md:w-80 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          src={article.image.replace(/"/g, "")}
          alt={article.title}
        />
      )}
      <div className="px-10">
        <h1 className="px-0 no-underline pb-2 headerTitle">{article.title}</h1>
        <div className="flex gap-y-1 flex-col divide-double py-5">
          <div className="text-sm flex gap-1">
            <p className="font-bold">By:</p> <p>{article.author}</p>
          </div>

          <div className="text-sm flex gap-1">
            <p className="font-bold">Source:</p> <p>{article.source}</p>
          </div>
          <div className="text-sm flex gap-1">
            <p className="font-bold">Language:</p>{" "}
            <p>{article.language === "en" ? "🇺🇸" : "🇪🇸"}</p>
          </div>
          <p className="text-sm italic">
            <LiveTimestamp time={article.published_at} />
          </p>
          <a
            href={article.url}
            target="_blank"
            className="text-orange-400 font-semibold italic text-md cursor-pointer"
          >
            Visit website
          </a>
        </div>
        <p>{article.description}</p>
      </div>
    </section>
  );
};

export default ArticlePage;
