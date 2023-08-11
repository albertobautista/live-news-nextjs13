import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query myQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
      $limit: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        keywords: $keywords
        countries: "mx,us"
        sort: "published_desc"
        limit: $limit
      ) {
        data {
          description
          image
          language
          published_at
          source
          title
          url
          author
          category
          country
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // fetch function with Next.ks 13 caching...
  const res = await fetch(
    "https://cwmafan.stepzen.net/api/nihilist-sparrow/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
          // limit: "3",
        },
      }),
    }
  );

  const newResponse = await res.json();

  // Sort function by images vs not images present
  const news = sortNewsByImage(newResponse.data.myQuery);

  return news;
};
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=ddd82190a43515b84d5ece7360f8a2e5&keywords=tennis"

export default fetchNews;
