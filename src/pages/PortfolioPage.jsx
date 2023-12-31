import React from 'react';
import PortfolioDetail from '../components/PortfolioDetail';
import ScrollToTop from '../components/ScrollToTop';

import portfolioItems from '../assets/db/portfolioData';
import PortfolioItemMore from '../components/PortfolioItemMore';
import { useParams } from 'react-router-dom';

const PortfolioPage = () => {
    const { portfolioId } = useParams();
  
    const filteredPortfolioItems = portfolioItems.filter(
      (portfolio) => portfolio._id !== portfolioId
    );
  
    const recommendations = filteredPortfolioItems.slice(0, 3);
  
    return (
    <>
      <ScrollToTop />
      <PortfolioDetail />
      <div id='other' className="section">
        <div className="container d-flex justify-content-center row">
          <div className="section-title text-center mb-5">
            <div className="section-title">
              <h1>My Other Projects</h1>
            </div>
            <div className="section-subtitle">
              <h6>Portfolio Showcase, A Glimpse into Creativity</h6>
            </div>
          </div>
          <div className="row d-flex justify-content-center p-0">
          {recommendations.map((portfolio) => (
              <PortfolioItemMore
                _id={portfolio._id}
                key={portfolio._id}
                title={portfolio.title}
                imageSrc={portfolio.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
