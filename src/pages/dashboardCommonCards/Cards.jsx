import React from 'react'

const Cards = ({number,name,icon_name}) => {
  return (
    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
    <div className="card dash-widget">
    <div className="card-body">
    <span className="dash-widget-icon"><i className= {`fa-solid ${icon_name}`}></i></span>
    <div className="dash-widget-info">
    <h3>{number}</h3>
    <span>{name}</span>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cards