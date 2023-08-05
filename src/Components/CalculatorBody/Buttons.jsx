import React from 'react'

const Buttons = (prop) => {
  
  return (
    <div className=' grid grid-cols-[3fr_1fr] gap-1'>
      <section className=' grid grid-rows-[1fr_4fr] gap-1'>
        <span className=' text-[#775a8b] grid grid-cols-[repeat(3,_1fr)] gap-1'>
          <button onClick={prop.clearAll} className=' bg-[#2f3646] border border-solid border-[rgb(80,_75,_75)]'>AC</button>
          <button onClick={prop.divide} className=' bg-[#2f3646] border border-solid border-[rgb(80,_75,_75)]'>/</button>
          <button onClick={prop.multiply} className=' bg-[#2f3646] border border-solid border-[rgb(80,_75,_75)]'>X</button>
        </span>
        
        <span className=' text-white grid grid-cols-[repeat(3,_1fr)] gap-1'>
          {prop.mapped}
        </span>
      </section>

      <section className=' grid grid-rows-[3fr_2fr] gap-1'>
        <span className=' text-white grid grid-rows-[repeat(3,_1fr] gap-1'>
          <button onClick={prop.del} className=' bg-[#c45bde]'>DEL</button>
          <button onClick={prop.minus} className=' bg-[#c45bde]'>-</button>
          <button onClick={prop.plus} className=' bg-[#c45bde]'>+</button>
        </span>
        <button onClick={prop.calc} className=' bg-[#c45bde] text-white rounded-br-[10px]'>=</button>
      </section>
       
    </div>
  )
}

export default Buttons