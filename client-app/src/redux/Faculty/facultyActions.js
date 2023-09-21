import { LOAD_ALL_FACULTIES } from './facultyTypes';
import API from '../../api';
import { facultiesPath } from '../../helpers/requestPaths';

export const loadAllFacultiesAction = (faculties) => ({
  type: LOAD_ALL_FACULTIES,
  payload: faculties
});

export const loadAllFaculties = () => {
  return (dispatch) => {
    API.get(`${facultiesPath}`)
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

export const createFaculty = (faculty) => () =>
  new Promise(function (resolve, reject) {
    API.post(facultiesPath, faculty)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const deleteFaculty = (facultyId) => () =>
  new Promise(function (resolve, reject) {
    API.delete(`${facultiesPath}/${facultyId}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const editFaculty = (facultyId, faculty) => () =>
  new Promise(function (resolve, reject) {
    API.put(`${facultiesPath}/${facultyId}`, faculty)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
