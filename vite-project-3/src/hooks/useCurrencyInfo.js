import { useEffect,useState } from "react";

 function useCurrenctInfo(currency){
    const[data,setData]=useState({}) //takin empty object inside useState
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        // console.log(data)
    },[currency])
    // console.log(data)
    return data;

 }
 export default useCurrenctInfo;


//part-1--> custon hook design ho gaya .