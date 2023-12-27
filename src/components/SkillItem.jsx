import React from 'react'

const SkillItem = ({title, imageSrc}) => {
  return (
    <div className="col-4 mb-4 text-center">
        <div className="icon-container ratio ratio-1x1 ">
            <div className="d-flex justify-content-center align-items-center text-center">
                <img src={imageSrc} alt={title} />
            </div>
        </div>
        <span>{title}</span>
    </div>
  )
}

export default SkillItem