import { useState } from "react"
import React from 'react'
import {BiArrowBack} from 'react-icons/bi'

export const TodoItem = ({todo}) => {

 const [isPopupVisible, setIsPopupVisible] = useState(false);


 const handleButtonClick = () => {
  document.body.style.overflow = 'hidden';
  setIsPopupVisible(!isPopupVisible);
  
};

const closePopup = (event) => {
  document.body.style.overflow = 'auto';
  setIsPopupVisible(false);
  event.stopPropagation();
};




  return (
    <div className="p-4  bg-gray-200 rounded-lg
    rounded-l-3xl rounded-r-3xl w-96 h-40  flex justify-center items-center hover:cursor-pointer " onClick={handleButtonClick}>
    <h2 className="text-lg text-black text-left mb-28">{todo.by}</h2>
    <h2 className="text-2xl text-black text-left mr-40 mt-5">{todo.title}</h2>
    
    {
      isPopupVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
        <div className="w-[90%] h-[55%] bg-white rounded-lg flex flex-col items-center justify-start gap-14 text-black">
        <BiArrowBack className='text-3xl text-black mt-10 mr-60' onClick={closePopup} />
       <div className="flex  flex-col items-center justify-center gap-10">
        <h2 className="mr-5">{todo.title}</h2>
        <h2 className="mr-5">{todo.by}</h2>
        <p className="max-w-[70%] text-left">{todo.description}
        </p>
        </div> 
       </div>
  </div>
      )
    }



    </div>
  )
}
