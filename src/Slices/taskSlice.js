import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasksList: [],
    selectedTask: {}
};

export const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            state.tasksList.push(action.payload);
        }
    }
});

export const { addTaskToList } = taskSlice.actions;
export default taskSlice.reducer;