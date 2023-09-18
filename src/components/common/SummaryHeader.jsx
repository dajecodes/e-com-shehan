import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SummaryHeader = (params) => {
  return (
    <div className="container">
        <div className="mt-5 mb-2 d-flex align-items-center justify-content-between">
          <h4>{params.title}</h4>
          <Link to={params.to}>
            View all <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
  )
}

export default SummaryHeader