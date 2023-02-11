import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home/Home';

export const tabs = [{ tabName: 'Home', url: '/' }];

export const goToPage = (link, navigate, object) => {
  navigate(`${link}`, object);
};

export function Routing() {
  return (
    <>
      <Routes>
        <Route path={'/'} exact element={<Home />} />
      </Routes>
    </>
  );
}
