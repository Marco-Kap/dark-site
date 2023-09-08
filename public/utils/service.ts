import { fetchAPI } from "./base";

export async function getPosts(first = 10) {
  const data = await fetchAPI(
    //GraphQL Query can be changed
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}
