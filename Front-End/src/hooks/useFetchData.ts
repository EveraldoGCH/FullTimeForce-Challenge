import { useState, useEffect } from "react"

export const useFetchData = (url: string) => {
    const [data, setData] = useState<any[]>()
    
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    },[url])

        return data
}


