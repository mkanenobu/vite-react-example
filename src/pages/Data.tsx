import React, { useState, useEffect } from "react";
import { fetchGitHub } from "../data/fetch-github";
import { Loading } from "../components/Loading";

export const Data: React.VFC = () => {
  const [data, setData] = useState(null);

  // When the component mounts we'll fetch a repository name
  useEffect(() => {
    let isMounted = true;
    fetchGitHub(`
query {
  search(query: "code", type: REPOSITORY) {
    repositoryCount
  }
}

    `)
      .then((response) => {
        if (!isMounted) {
          return;
        }
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, [fetchGitHub]);

  return (
    <div>
      <header>
        {data != null ? (
          <code>Data: {JSON.stringify(data, undefined, 2)}</code>
        ) : (
          <Loading />
        )}
      </header>
    </div>
  );
};
