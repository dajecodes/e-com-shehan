import React from "react";

const CardSlide = () => {
  return (
    <div className="card col-10 col-md-6 col-lg-5 m-3 p-0 text-bg-secondary">
      <div className="row g-0">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center  ">
          <img
            src="/assets/p10/1.jpg"
            className='img-fluid  card-img'
            
            alt=""
          />
        </div>

        <div className="col h-100">
          <div className="card-body d-flex flex-column justify-content-around ">
            <h4>Never-Ending Summer</h4>
            <h6>Throwback Shirts & all-day dressed</h6>
            <p className="card-text d-block d-md-none d-xl-block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              repellendus? Veritatis ad facere sapiente voluptas. Laboriosam,
            </p>
            <div className="d-flex justify-content-center mt-5 ">
              <button className="btn btn-dark">Explore all category</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlide;
