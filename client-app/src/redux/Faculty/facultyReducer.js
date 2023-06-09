import { LOAD_ALL_FACULTIES } from './facultyTypes';

const initialState = {
  allFaculties: []
};

const facultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_FACULTIES: {
      return {
        ...state,
        allFaculties: action.payload
      };
    }
    default:
      return state;
  }
};

export default facultyReducer;
