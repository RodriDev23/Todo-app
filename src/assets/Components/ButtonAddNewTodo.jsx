import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AddNewTodo } from './AddNewTodo';

export const ButtonAddNewTodo = () => {
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = () => {
    document.body.style.overflow = 'hidden';
    setIsPopupVisible(!isPopupVisible);
    
  };
  
  const closePopup = (event) => {
    document.body.style.overflow = 'auto';
    setIsPopupVisible(false);
    if (event) {
      event.stopPropagation();
    }
  };




  return (
    <div>
      <button
        className='w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center'
        onClick={handleButtonClick}
      >
        <AiOutlinePlus className='text-3xl text-white' />
      </button>

      {isPopupVisible && (
       <AddNewTodo closePopup={closePopup}/>
      )}
    </div>
  );
};
