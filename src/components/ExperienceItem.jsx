import React from 'react'

const ExperienceItem = ({year, position, company, type, date, place}) => {
  return (
    <div className="row mb-4">
        <div className="col-2">
            <h6>{year}</h6>
        </div>
        <div className="col-10">
            <h6>{position}</h6>
            <p>{company} · {type}</p>
            <span>{date}<br/>{place}</span>
        </div>
    </div>
  )
}

export default ExperienceItem