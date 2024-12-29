import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const LazyHomePage = lazy(() => import('../../pages/HomePage'));

export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<LazyHomePage />} />
    </Routes>
  );
};
