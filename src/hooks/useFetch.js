import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8088/api/v1"

function useFetch(url, option) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMount = true;

    const callApi = async () => {
      setLoading(true);
      await fetch(BASE_URL + url, option)
        .then(res => {
          if (res.ok)
            return res.json();
          throw new Exception("Not found!");
        })
        .then(data => {
          if (isMount)
            setData(data);
        })
        .catch(err => setError(err))
        .finally(setLoading(false))
    }

    callApi();

    return () => {
      isMount = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;