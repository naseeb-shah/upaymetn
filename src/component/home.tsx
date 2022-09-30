import React, { useEffect, useState } from 'react';
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpbmVvMzU1MUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vbmFzZWViLXNoYWgiLCJpYXQiOjE2NjQxMTc3NjcsImV4cCI6MTY2NDU0OTc2N30.220MHIwG7P2M8zHyhUR6HNhVowfBpMWdevT_FEDiZBI
import instance from '../axios';

import Allprod from './allproduct';

 export default function Home(){

 
     const [data,setdata]=React.useState<Array<object>>()


     React.useEffect(()=>{

         instance.get('/api/products').then(x=>setdata(x.data.products)).catch(x=>console.log(x))
     },[])
console.log(data)

return <> 

<div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
  

   {data?.map(e=><Allprod element={e}/>)}
     </>
}