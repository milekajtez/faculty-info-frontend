import { LOAD_ALL_FACULTIES } from './facultyTypes';
import API from '../../api';
import { allFacultiesPath } from '../../helpers/requestPaths';

export const loadAllFacultiesAction = (faculties) => ({
  type: LOAD_ALL_FACULTIES,
  payload: faculties
});

export const loadAllFaculties = () => {
  return (dispatch) => {
    API.get(`${allFacultiesPath}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(loadAllFacultiesAction(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
