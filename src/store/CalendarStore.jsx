import {create} from 'zustand';

export const useCalendarStore = create((set) => ({
   
    daysOfWeek: [
        {
          day: 'Mon',
          todos: [
            {
              id: 1,
              title: 'Learn Next.js',
              by: "Myself",
              completed: false,
              description: "Learn Next.js and become a Frontend Developer"
            },
            {
              id: 2,
              title: 'Todo 2 for Mon',
              by: "Family",
              title: "Go to the store",
              completed: false,
              description: "Go to the store and buy some food"
    
            },
          ],
        },
        {
          day: 'Tue',
          todos: [
            {
              id: 3,
              title: 'Learn React',
                by: "Myself",
                completed: false,
                description: "Learn React and become a Frontend Developer"
            },
            {
              id: 4,
              title: 'Go to the mall',
                by: "Family",
                completed: false,
                description: "Go to the mall and buy some clothes"
            },
          ],
        },
        {
          day: 'Wed',
          todos: [
            {
              id: 5,
              title: 'Go to the Job Interview',
                by: "Myself",
                completed: false,
                description: "Go to the Job Interview and get the job"
            },
            {
              id: 6,
              title: 'Go to the Cinema',
                by: "Family",
                completed: false,
                description: "Go to the Cinema and watch a movie"
            },
          ],
        },
        {
          day: 'Thu',
          todos: [
            {
              id: 7,
              title: 'Play Basketball',
                by: "Myself",
                completed: false,
                description: "Play Basketball and become a Basketball Player"
            },
            {
              id: 8,
              title: 'Play Soccer',
                by: "Family",
                completed: false,
                description: "Play Soccer and enjoy the game"
            },
          ],
        },
        {
          day: 'Fri',
          todos: [
            {
              id: 9,
              title: 'Go to the Gym',
                by: "Myself",
                completed: false,
                description: "Go to the Gym and become a Bodybuilder"

            },
            {
              id: 10,
              title: 'Play games on the pc',
                by: "Family",
                completed: false,
                description: "Play games on the pc and have fun"
            },
          ],
        },
        {
            day: 'Sat',
            todos: [
              {
                id: 9,
                title: 'Go to the Gym',
                  by: "Myself",
                  completed: false,
                  description: "Go to the Gym and become a Bodybuilder"
  
              },
            
            ],
          },
          {
            day: 'Sun',
            todos: [
              {
                id: 9,
                title: 'Go to the Gym',
                  by: "Myself",
                  completed: false,
                  description: "Go to the Gym and become a Bodybuilder"
  
              },
            
            ],
          },


      ],
      selectedDay: [],
  setSelectedDay: (day) => set((state) => ({ selectedDay: day })),
  updateDayTodos: (day, todos) =>
    set((state) => ({
      daysOfWeek: state.daysOfWeek.map((d) =>
        d.day === day ? { ...d, todos } : d
      ),
    })),
    addTodo: (newTodo) =>
    set((state) => ({
      daysOfWeek: state.daysOfWeek.map((d) =>
        d.day === state.selectedDay
          ? { ...d, todos: [...d.todos, newTodo] }
          : d
      ),
      selectedDay: state.selectedDay, // retain the selected day
    })),
}));    