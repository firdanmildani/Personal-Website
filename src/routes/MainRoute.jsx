import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PortfolioPage from '../pages/PortfolioPage';
import PortfolioDetail from '../components/PortfolioDetail';

const MainRoute = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="portfolio" element={<PortfolioPage/>}>
              <Route path=":portfolioId" element={<PortfolioDetail/>} />
            </Route>
        </Routes>
    </>
  )
}

export default MainRoute