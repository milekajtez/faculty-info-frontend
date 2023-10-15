import { LOAD_ALL_FACULTIES, LOAD_ALL_FACULTY_ADMINS } from './facultyTypes';
import API from '../../api';
import {
  facultiesPath,
  facultyAdminsPath,
  registerFacultyAdminsPath
} from '../../helpers/requestPaths';

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

export const loadAllFacultyAdminsAction = (facultyAdmins) => ({
  type: LOAD_ALL_FACULTY_ADMINS,
  payload: facultyAdmins
});

export const loadAllFacultyAdmins = () => {
  return (dispatch) => {
    API.get(`${facultyAdminsPath}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(loadAllFacultyAdminsAction(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const createFacultyAdmin = (facultyAdmin) => () =>
  new Promise(function (resolve, reject) {
    API.post(registerFacultyAdminsPath, facultyAdmin)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const deleteFacultyAdmin = (facultyAdminId) => () =>
  new Promise(function (resolve, reject) {
    API.delete(`${facultyAdminsPath}/${facultyAdminId}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
