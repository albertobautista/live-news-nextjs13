"use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};
const ReadMoreButton = ({ article }: Props) => {
  // const router = useRouter();

  // const handleClick = () => {
  //   const queryString = Object.entries(article)
  //     .map(([key, value]) => `${key}="${value}"`)
  //     .join("&");

  //   const url = `/article?${queryString}`;
  //   console.log(url);
  //   router.push(url);
  // };

  return (
    <Link
      href={{
        pathname: "/article",
        query: article,
      }}
      className="bg-orange-400 h-10 flex items-center justify-center flex-2 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
    >
      Read More
    </Link>
  );
};

export default ReadMoreButton;
