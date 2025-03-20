import { useState } from "react";

const Counter = ()=>{
    const [count,setCount] = useState(0);
    return(
        <div>
            <button className="w-[48px] h-[48px] rounded-md border border-2 border-[#ccc] bg-transparent hover:bg-[#0084d1]" onClick={()=>setCount(count=>count-1)}>-</button>
            <span className="text-4xl">{count}</span>
            <button className="w-[48px] h-[48px] rounded-md border border-2 border-[#ccc] bg-transparent hover:bg-[#0084d1]" onClick={()=>setCount(count=>count+1)}>+</button>
        </div>
    )
}
export default Counter;