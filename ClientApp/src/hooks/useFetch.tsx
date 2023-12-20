import { useState, useEffect } from "react";
import { getApiUrl } from "../utils/getApiUrl";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${getApiUrl()}/${url}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "1",
          }
        },)
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
