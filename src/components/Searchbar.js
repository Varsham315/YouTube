import React, { useEffect }  from 'react'
import { useState } from 'react'
export default function Searchbar() {
        let [count,setCount]=useState(1)
        useEffect(()=>{console.log("hello world")},{count})
      return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>click</button>
        </>
      );
    }
