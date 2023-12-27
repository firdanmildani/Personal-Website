import React from 'react'
import { Link } from 'react-router-dom';

const PortfolioItemMore = (props) => {
  return (
    <div className={'col-md-4 col-xs-12 mb-4 portfolio-more'}>
        <Link to={`/portfolio/${props._id}`} className='product-link'>
            <div className="image-container">
                <div className="overlay d-flex text-center justify-content-center align-items-center">
                    <div>
                        <h2>{props.title}</h2>
                        <span>{props.brief}</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={props.imageSrc} alt={props.title} />
                </div>
            </div>                                  
            </Link>
    </div>
  )
}

export default PortfolioItemMore

