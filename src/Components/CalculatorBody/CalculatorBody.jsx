import React from 'react'
import ResultBox from './ResultBox'
import Buttons from './Buttons'

const CalculatorBody = () => {
  return (
    <div className=' h-[32rem] w-[23rem] bg-slate-100 grid place-items-center rounded-[15px] '>
        <main className=' h-[98%] w-[98%] bg-[#2b2e37] rounded-[10px] grid mainStyle'>
            <ResultBox />
            <Buttons />
        {/* <div >
          <section >
            <p>13 x 50</p>
            <h1>650</h1>
            <div ></div>
          </section>
          <section >
            <section >
              <div >
                <div >AC</div>
                <div >7</div>
                <div >4</div>
              </div>
              <div >
                <div >/</div>
                <div >8</div>
                <div >5</div>
              </div>
              <div >
                <div >X</div>
                <div >9</div>
                <div >6</div>
              </div>
              <div >
                <div >^</div>
                <div>-</div>
                <div >+</div>
              </div>
            </section>

            <section >
              <span >
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

              <span class="mainspan2">=</span>
            </section>
          </section>
        </div> */}
    </main>
    </div>
  )
}

export default CalculatorBody