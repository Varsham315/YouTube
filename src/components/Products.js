import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Products() {
    const [Products,setProducts]=useState(Object)
    useEffect(()=>{
        axios.get('http://dummyjson.com/product')
        .then(res => setProducts(res.data.Product))
    })
    console.log(Products)
    return(  
     <h1> product page</h1>
    )
}