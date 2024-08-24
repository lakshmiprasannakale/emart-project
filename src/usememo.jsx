import {useMemo,useState } from "react";
function Action(){
    const [c,setCount]=useState(1)
    let num1=2;
    let num2=30;
    const increment = () => {
        setCount((c) => c + 1);
      };
    
    let sum=useMemo(
        ()=>{
            return num1+num2
        },[num1,num2]
    )

}
return(
    <>
    count:{sum}
        <button onClick={increment}>+</button>{
            setcounter(counter + 1)
        }
    </>
)
export default Action;