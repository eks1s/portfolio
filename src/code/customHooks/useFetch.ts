import { useState, useRef, useEffect } from 'react';

//!change cache any if it needs
export function useFetch(url: string, options: any) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState(null || Error);
  const cache = useRef<any>({});

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      if (cache.current[url]) {
        const data = cache.current[url];
        setResponse(data);
      } else {
        try {
          const response = await fetch(url, options);
          const json = await response.json();
          cache.current[url] = json;
          setResponse(json);
        } catch (error) {
          setError(error as Error);
        }
      }

      setLoading(false);
    }

    fetchData();
  }, [url]);

  return { isLoading, response, error };
}
