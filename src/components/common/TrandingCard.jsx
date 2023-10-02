import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TrandingCard = () => {
  return (
    <div className="card text-bg-secondary p-0 m-2 col-10 col-sm-5 col-md-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center border-0">
                    
                    
    <img src="/assets/p5/1.jpg"className="card-img-top" alt="test" />
    <div className="card-body">
        <h5>Lehenga Collection</h5>
        <h6>Weddingdress</h6>
        <div>
        <FontAwesomeIcon icon={faStar} style={{color: "#fdbd0d",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fdbd0d",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fdbd0d",}} />
        <FontAwesomeIcon icon={faStar} style={{color: "#fdbd0d",}} />
        </div>
        <div className="price">
          <span>Rs. 1150/-</span>
          <button className="btn btn-dark ms-3">Shop Now</button>
        </div>
    </div>
</div>
  )
}

export default TrandingCard