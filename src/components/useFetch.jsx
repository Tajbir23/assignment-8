import { useEffect, useState } from "react"


const useFetch = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const data = async () => {
            const response = await fetch("/data.json");
            const data = await response.json();
            setData(data);
        }
        data();
    },[])
  return data
}

export default useFetch