import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todoList: [],
}

const todo = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //This function will allow to change the current state with new value

    addToDo: (state, action) => {
      state.todoList.push(action.payload)
    },
  },
})

export const { addToDo } = todo.actions

export const selectTodoList = (state) => state.todos.todoList
export default todo.reducer
