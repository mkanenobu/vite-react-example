export const fetchGitHub = async (
  query: string | null | undefined,
  variables?: Record<string, string | number>
) => {
  const githubAuthToken = import.meta.env.VITE_APP_GITHUB_TOKEN;
  console.log({ githubAuthToken });

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${githubAuthToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
};
