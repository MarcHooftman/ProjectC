import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (json.traceId) {
            if (json.status && json.title) {
              setError(`Error: ${json.status} - ${json.title}, traceId: ${json.traceId}`);
            }
            setError("Error: Unknown error");
          } else {
            setData(json);
          }
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
