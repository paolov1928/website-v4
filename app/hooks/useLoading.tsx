import { useEffect, useState } from "react";

export const useLoading = () =>{
    const [loading, setLoading] = useState('is-loading');

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLoading('');
      }, 100);

      return () => clearTimeout(timeoutId);
    }, []);

    return{loading}
}