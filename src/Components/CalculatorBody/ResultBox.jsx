import React from 'react'

const ResultBox = (prop) => {
  return (
    <div className=' text-white text-[4rem] grid place-content-end place-items-end mr-[1rem]'>
      {prop.value}
    </div>
  )
}

export default ResultBox