import './App.css';
import CalculatorBody from './Components/CalculatorBody/CalculatorBody';

function App() {
  return (
    <div className=" h-[100vh] grid place-content-center place-items-center body">
      <CalculatorBody />
      <h3 className=' mt-[1rem] text-[1.5rem] text-slate-100'>Created by <a className=" text-blue-400 underline hover:decoration-dashed" href="https://github.com/Honey-Macss" target='blank'>Honey MACss</a></h3>
    </div>
  );
}

export default App;
