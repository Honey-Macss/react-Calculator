import React from 'react'

const Buttons = () => {
  return (
    <div className=' buttonStyle'>
       <section className=' bg-cyan-500 equalBoxes'>
              <div className=' verticalDiv'>
                <div className="purple">AC</div>
                <div >7</div>
                <div >4</div>
              </div>
              <div className=' verticalDiv'>
                <div className="purple">/</div>
                <div >8</div>
                <div >5</div>
              </div>
              <div className=' verticalDiv'>
                <div className="purple">X</div>
                <div >9</div>
                <div >6</div>
              </div>
              <div className=' verticalDiv'>
                <div >^</div>
                <div>-</div>
                <div >+</div>
              </div>
        </section>

        <section className=' bg-red-700'>
              {/* <span >
                <span >
                  <span >1</span>
                  <span >2</span>
                  <span >3</span>
                </span>
                <span >
                  <span >.</span>
                  <span >0</span>
                  <span >%</span>
                </span>
              </span>

              <span class="mainspan2">=</span> */}
        </section>
    </div>
  )
}

export default Buttons