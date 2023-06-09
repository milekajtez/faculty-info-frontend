import { configureStore } from '@reduxjs/toolkit';
import facultyReducer from './Faculty/facultyReducer';

const store = configureStore({
  reducer: {
    faculties: facultyReducer
  }
});

export default store;
