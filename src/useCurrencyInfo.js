import { useEffect, useState } from "react";

// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
function useCurrencyInfo(currency)
{
    const [data,setData]=useState({});
    let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    // console.table(data);
    return data;
}

export default useCurrencyInfo;