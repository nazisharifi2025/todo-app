import { useEffect, useState } from "react"

export default function Clock(){
    const [Clock,setClock]= useState(new Date().toLocaleDateString());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setClock(new Date().toLocaleTimeString())
        },1000);
        return()=>clearInterval(timer);
    },{});
    return(
          <div className="h-screen flex-col w-full bg-gray-100 flex justify-center items-center text-4xl">
            <p className="p-4 shadow-md shadow-gray-600 text-gray-800">{Clock}</p>
        </div>
    )
}