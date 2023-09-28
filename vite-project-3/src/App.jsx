import React, { useState } from 'react'
import {InputBox} from './components'
import useCurrenctInfo from './hooks/useCurrencyInfo'

const App = () => {

  const[amount,setAmount]=useState(0)
  const[convertedAmount,setConvertedAmount]=useState(0)
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  
  


  const currenctInfo=useCurrenctInfo(from)  //from here we are passing the argument to our useCurrenctInfo.(i.e our custom hook)
//   console.log(currenctInfo)
const options = currenctInfo ? Object.keys(currenctInfo) : [];
//getting all the keys here from the data object. (i.e currency)
//  console.log(options)                       // we are getting all the keys in the form of array.
  
 const swap =()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)  //changes in UI. eg- USD to INR and vice-versa.
    
    
    
  }

 const convert=()=>{
  setConvertedAmount(amount*currenctInfo[to])
 }

 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/7130472/pexels-photo-7130472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();  // preventing form from submission.( kyuki jab v  form  submit hota hai  it goes to some address or url and avi hum wo nahi chahte hai.)
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOption={options}
                        
                          onCurrencyChange={(currency)=>{
                            setAmount(amount)
                          }}
                          selectCurrency={from}
                          onAmountChange={(amount)=>setAmount(amount)}
                       
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                          
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOption={options}
                          onCurrencyChange={(currency)=>{
                            setTo(currency)
                          }}
                          selectCurrency={to}
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
