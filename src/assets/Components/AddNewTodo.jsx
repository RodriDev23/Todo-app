import React, { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useCalendarStore } from '../../store/CalendarStore';

export const AddNewTodo = ({ closePopup }) => {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    by: '',
    day: '',
  });

  const calendarStore = useCalendarStore();

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTodo((prevTodo) => ({ ...prevTodo, title }));
    console.log(`title value is ${title}`);
  };

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setTodo((prevTodo) => ({ ...prevTodo, description }));
    console.log(`the description is ${description}`);
  };

  const onByChange = (e) => {
    const by = e.target.value;
    setTodo((prevTodo) => ({ ...prevTodo, by }));
    console.log(`the by is ${by}`);
  };

  const onDayChange = (e) => {
    const day = e.target.value;
    setTodo((prevTodo) => ({ ...prevTodo, day }));
    console.log(`the day is ${day}`);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!todo.title) return;

    const newTodo = {
       id: (useCalendarStore.todos && useCalendarStore.todos.length) ? useCalendarStore.todos.length + 1 : 1,
      ...todo,
      completed: false,
    };

    calendarStore.addTodo(newTodo);
    console.log('the new todo is', newTodo);
    console.log('calendar Store', calendarStore);
    
    setTodo({
      title: '',
      description: '',
      by: '',
      day: '',
    });

    closePopup();
  };


   console.log('calendarStore', calendarStore)


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
      <div className="w-[90%] h-[85%] bg-[#082769] rounded-md flex flex-col items-center justify-center gap-14 text-white pt-4">
        <BiArrowBack className="text-white mr-72 w-80 h-40 pt-3" onClick={closePopup} />

        <input
          name="input-title"
          type="text"
          value={todo.title}
          onChange={onTitleChange}
          placeholder="Tap here to add a title"
          className="text-3xl rounded-lg pl-2 px-5 py-1 text-white ml-5 focus:outline-none bg-[#082769]"
        />

        <textarea
          name="textarea"
          value={todo.description}
          onChange={onDescriptionChange}
          placeholder="tap here to add a description"
          className="rounded-lg w-[80%] text-white resize-none text-left overflow-hidden py-16 bg-[#082769] text-xl mr-13 focus:outline-none"
        ></textarea>

        <div className="w-40 h-40 rounded-lg flex flex-col items-center justify-center">
          <select
            className="text-white bg-[#082769] text-xl"
            value={todo.by}
            onChange={onByChange}
          >
            <option value="Myself">Myself</option>
            <option value="Me and a Friend">Me and a Friend</option>
            <option value="Work">Work</option>
          </select>
        </div>

        <div className="w-40 h-40 rounded-lg flex flex-col items-center justify-center bg-[#082769] gap-5">
          <p className="text-semibold text-xl">Select the day of the week</p>
          <select
            className="text-white bg-[#082769] font-semibold text-2xl"
            value={todo.day}
            onChange={onDayChange}
          >
            <option value="option1">Mon</option>
            <option value="option2">Tue</option>
            <option value="option3">Wed</option>
            <option value="option4">Thu</option>
            <option value="option5">Fri</option>
            <option value="option6">Sat</option>
            <option value="option7">Sun</option>
          </select>
        </div>

        <button
          className="bg-blue-500 text-white px-5 py-3 rounded-lg mb-10"
          type="submit"
          onClick={onFormSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};
