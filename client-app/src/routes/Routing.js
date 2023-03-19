import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Faculties } from '../components/Faculty/Faculties/Faculties';
import { FacultyAdmins } from '../components/Faculty/FacultyAdmins/FacultyAdmins';
import { Home } from '../components/Home/Home';

export const tabs = [{ tabName: 'Home', url: '/' }];

export const goToPage = (link, navigate, object) => {
  navigate(`${link}`, object);
};

export function Routing(props) {
  return (
    <Routes>
      <Route
        path={'/'}
        exact
        element={<Home session={props.session} setSession={props.setSession} />}
      />
      <Route path={'/faculties'} exact element={<Faculties />} />
      <Route path={'/facultyAdmins'} exact element={<FacultyAdmins />} />
    </Routes>
  );
}
