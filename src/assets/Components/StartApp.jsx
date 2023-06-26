import React from 'react'
import { useCalendarStore } from '../../store/CalendarStore'
import { TodoItem } from './TodoItem'

export const StartApp = () => {
 
    let date = new Date()
    let day = date.getDate()
    let year = new Date().getFullYear()
    let hour = new Date().getHours()
    let dayName = new Date().toLocaleString('default', { weekday: 'long' })
    let dayNameShort = new Date().toLocaleString('default', { weekday: 'short' })

    const time = (hour) => {
        if (hour <= 10) {
          return <h2 className='text-blue-400'>Morning</h2>;

        }  else if (hour <= 16 && hour <= 20) {
          return <h2 className='text-blue-400'>Evening</h2>;
        }
         else if (hour > 16) {
          return <h2 className='text-blue-400'>Afternoon</h2>;
        } else if (hour >= 20) {
          return <h2 className='text-blue-400'>Night</h2>;
        }
      };


    const daysOfWeek = useCalendarStore((state) => state.daysOfWeek)  
 
    return (
    <div className='flex flex-col gap-10 justify-center items-center'>
        <h1 className='text-7xl text-left  mr-5 text-blue-400'>Good<br/> {time(hour)}</h1>
        <div className='flex items-center justify-between gap-20'>
            <h2 className='text-white'>Todays is {dayName}</h2>
            <h2 className='text-white'>50% complete</h2>
        </div>
        <div className='flex items-center justify-between gap-20'>
            <h2 className='text-gray-500'>{dayNameShort} {day}, {year} </h2>
            <h2 className='text-gray-500'>Completed tasks</h2>
        </div>
    <div className='flex items-start justify-start'>
        <h2 className='text-4xl  font-extralight mr-48'>Tasks</h2>
    </div>
    
    <div className="w-[80%] bg-gray-200 rounded-full h-1.5 mb-1 dark:bg-gray-700">
      <div className="bg-gray-600 h-1.5 rounded-full dark:bg-gray-300" style={{ width: '50%' }}></div>
    </div>


    <div className='flex gap-3 '>
        {daysOfWeek.map((day) => (
          <div key={day.day}>
            <p 
            onClick={() => useCalendarStore.setState({ selectedDay: day.day })}
            className={`text-lg text-gray-500 `}>{day.day}
            </p>
          </div>
        ))}
      </div>


    </div>
  )
}
