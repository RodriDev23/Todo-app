import { useEffect, useReducer } from 'react';
import { tudoReducer } from '../assets/Funcionality/tudoReducer';
import { useCalendarStore } from '../store/CalendarStore';

export const useTodo = () => {
  const initialState = {
    todos: [],
    selectedDay: null,
  };

  const [state, dispatch] = useReducer(tudoReducer, initialState);
  const { setSelectedDay, updateDayTodos } = useCalendarStore();

  useEffect(() => {
    updateDayTodos(state.selectedDay, state.todos);
  }, [state.todos, state.selectedDay, updateDayTodos]);

  const addTodo = (todo) => {
    dispatch({
      type: 'ADD_TUDO',
      payload: todo,
    });

    setSelectedDay(todo.day);
  };

  const removeTodo = (id) => {
    dispatch({
      type: 'REMOVE_TUDO',
      payload: id,
    });
  };

  const toggleTodo = (id) => {
    dispatch({
      type: 'TOGGLE_TUDO',
      payload: id,
    });
  };

  return {
    todos: state.todos,
    selectedDay: state.selectedDay,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
