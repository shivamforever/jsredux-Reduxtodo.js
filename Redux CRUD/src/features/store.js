import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice.js';

const store = configureStore({
    devTools: true,
    reducer: {
        todos: todoReducer,
    },
});

export default store;