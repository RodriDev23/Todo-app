import React, { useEffect } from 'react';
import { useCalendarStore } from "../../store/CalendarStore";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const selectedDay = useCalendarStore((state) => state.selectedDay);
  const daysOfWeek = useCalendarStore((state) => state.daysOfWeek);

  // Find the selected day in the daysOfWeek array
  const selectedDayObject = daysOfWeek.find((day) => day.day === selectedDay);

  // Get the todos for the selected day, or an empty array if no day is selected
  const todosForSelectedDay = selectedDayObject?.todos || [];

  useEffect(() => {
    // Find the selected day in the daysOfWeek array
    const selectedDayObject = daysOfWeek.find((day) => day.day === selectedDay);

    // Get the todos for the selected day, or an empty array if no day is selected
    const todosForSelectedDay = selectedDayObject?.todos || [];

    console.log('selectedDay:', selectedDay);
    console.log('daysOfWeek:', daysOfWeek);
    console.log('selectedDayObject:', selectedDayObject);
    console.log('todosForSelectedDay:', todosForSelectedDay);

    // Update the state or perform any other logic based on todosForSelectedDay

  }, [daysOfWeek, selectedDay]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-6 lg:gap-10 justify-center items-center">
      {todosForSelectedDay.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
};
