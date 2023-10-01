import { LOAD_ALL_FACULTIES, LOAD_ALL_FACULTY_ADMINS } from './facultyTypes';

const initialState = {
  allFaculties: [],
  allFacultyAdmins: []
};

const facultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_FACULTIES: {
      return {
        ...state,
        allFaculties: action.payload
      };
    }
    case LOAD_ALL_FACULTY_ADMINS: {
      return {
        ...state,
        allFacultyAdmins: action.payload
      };
    }
    default:
      return state;
  }
};

export default facultyReducer;
