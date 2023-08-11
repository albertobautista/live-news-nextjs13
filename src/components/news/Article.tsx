/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LiveTimestamp, ReadMoreButton } from "..";

type Props = {
  article: Article;
};
const Article = ({ article }: Props) => {
  console.log(article.image);
  return (
    <article className="bg-slate-100 border border-slate-300 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-scale-200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-serif font-bold">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="tet-xs line-clamp-6">{article.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-2 pt-5 italic text-gray-400">
            <p>{article.source} -</p>
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
};

export default Article;
