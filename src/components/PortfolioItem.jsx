import React from 'react'
import { Link } from 'react-router-dom';

const PortfolioItem = (props) => {
    const columnClass = props.isLarge ? 'col-md-8' : 'col-md-4';
  return (
    <div className={columnClass + ' col-sm-12 mb-4 banner'}>
        <Link to={`/portfolio/${props._id}`} className='product-link'>
            <div className="image-container">
                <div className="overlay d-flex align-items-center ps-4">
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
        {/* <a href="/portfolio">
            <div className="image-container">
                <div className="overlay d-flex align-items-center ps-4">
                    <div>
                        <h2>{title}</h2>
                        <span>{description}</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={imageSrc} alt={title} />
                </div>
            </div>                                                  
        </a> */}
    </div>
  )
}

export default PortfolioItem

