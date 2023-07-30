import React from 'react'
import ResultBox from './ResultBox'
import Buttons from './Buttons'
import { useState } from 'react'

const CalculatorBody = () => {
  const numbers = [7,8,9,4,5,6,1,2,3];
  const mappedNumbers = numbers.map((number) => {
    return <button onClick={() => handleClick(number.toString())} className=' bg-[#2f3646] border border-solid border-[rgb(80,_75,_75)]'>{number}</button>
  })
  
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const ops = ["/", "*", "-", "+", "."]
    if (
      (ops.includes(e) && value === '') ||
      (ops.includes(e) && ops.includes(value.slice(-1)))
    ){
      return;
    }
    setValue(value + e)
    if (value.length >= 9) {
      setValue(value)
    }
    // if (!ops.includes(e)){
    //   setValue(eval(value + e.toString()))
    // }
  }

  const calculate = () => {
    try {
      setValue(eval(value))
   } catch (error) {
       setValue("ERROR") 
   }
  }

  return (
    <div className=' h-[32rem] w-[23rem] bg-slate-100 grid place-items-center rounded-[15px] '>
        <main className=' h-[98%] w-[98%] bg-[#2b2e37] rounded-[10px] grid grid-rows-[1fr_2.1fr] gap-[4px] mainStyle'>
            <ResultBox value={value}/>
            <Buttons mapped={mappedNumbers} plus={() => handleClick("+")} minus={() => handleClick("-")} divide={() => handleClick("/")} multiply={() => handleClick("*")} calc={calculate} clearAll={() => setValue("")} del={() => setValue(value.slice(0, -1))} zero={()=> {handleClick("0")}} doubleZero={()=> {handleClick("00")}} dot={()=> {handleClick(".")}}/>
        
    </main>
    </div>
  )
}

export default CalculatorBody