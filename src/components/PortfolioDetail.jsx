import React from 'react'
import { useParams } from 'react-router-dom';
import portfolioItems from '../assets/db/portfolioData';
import ScreenshotCarousel from './ScreenshotCarousel';

const PortfolioDetail = () => {
    const { portfolioId } = useParams();
    const portfolio = portfolioItems.find((p) => p._id === portfolioId);
    if (!portfolio) {
        return <div>Portfolio not found</div>;
    }
  return (
    <>
        <div className="section" id='showcase'>
            <div className="container">
                <div className='showcase d-flex justify-content-center align-items-center'>
                    <img src={portfolio.showcase} alt={portfolio.title} />
                </div>
            </div>
        </div>
        <div className="section p-0" id='description'>
            <div className="container">
                <div className="section-title text-center mb-5">
                    <div className="section-title">
                        <h1>{portfolio.title}</h1>
                    </div>
                    <div className="section-subtitle">
                        <h6>{portfolio.brief}</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 col-md-9 mb-5">
                        <p className='mb-4'>{portfolio.description}</p>
                        <p>{portfolio.description1}</p>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className='col-12 text-center icon-menu'>
                            <div className="company-logo d-flex justify-content-center align-items-center">
                                <img src={portfolio.logo} alt={portfolio.title} />
                            </div>
                        {portfolio.link && (
                            <a target='_blank' href={portfolio.link} rel="noreferrer">
                                <h6>{portfolio.detail}</h6>
                            </a>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section" id='media'>
            <div className="container">
                <div>
                    <ScreenshotCarousel screenshots={portfolio.screenshots} />
                </div>
            </div>
        </div>
    </>
  )
}

export default PortfolioDetail