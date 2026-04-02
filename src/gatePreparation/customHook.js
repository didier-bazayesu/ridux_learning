import React,{useEffect,useState} from 'react'
function useCustomHook(url) {

    const [loading , setLoading] = useState(null);
    const [error , setError] = useState(null);
    const [data , setData ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
           
            setLoading(false);
        } catch (error) {
            setError(error); 
            setLoading(false);
        }
        };

        fetchData();
    }, []);

    return  {data : data,  loading : loading , error:error}
  
}

export default useCustomHook