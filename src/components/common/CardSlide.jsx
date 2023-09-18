import React from "react";

const CardSlide = () => {
  return (
    <div className="card col-10 col-md-6 col-lg-5 m-3 p-0 text-bg-secondary">
      <div className="row g-0">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center  ">
          <img
            src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/379986269_205725209188390_2464918292275984020_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=813123&_nc_eui2=AeGbmVNXSBC90I4VsHx_obV-6JsIiqdRakvomwiKp1FqS6rBF9TAoy_6LJIIVRmZDfI&_nc_ohc=NpTv2SDKz4IAX9VeVqL&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AfBaQ5VAx85HYzDhKe6ZtXSmVfX1Mu9x1WurI6lR75aiow&oe=650CEA8E"
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
