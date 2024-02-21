import { useEffect } from "react";
import { useState } from "react"


const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000);
        return()=>{
            clearInterval(intervalId)
        }
    }, []);
    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12;
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridian}`
    }
    function addZero(number){
        return (number < 10 ? "0" : "") + number;
    }
  return (
    <div className="container flex justify-center min-h-[100vh] items-center bg-slate-950 min-w-[100vw]">
        <div className="text-8xl font-bold font-mono text-shadow-md  text-white backdrop-brightness-150 px-5 ">
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}

export default DigitalClock