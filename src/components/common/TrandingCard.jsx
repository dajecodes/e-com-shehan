import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TrandingCard = () => {
  return (
    <div className="card text-bg-secondary p-0 m-2 col-10 col-sm-5 col-md-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center border-0">
                    
                    
    <img src="https://scontent.fcmb11-1.fna.fbcdn.net/v/t39.30808-6/378393908_206032005824377_8634937386739295680_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=813123&_nc_eui2=AeH-kKWkSRaAgquVqE139Oei3QK8rDZreYHdArysNmt5gfM3T4CtvhuPgFw-JDHO2bs&_nc_ohc=kQy6zPd6C30AX_lifu7&_nc_zt=23&_nc_ht=scontent.fcmb11-1.fna&oh=00_AfB1Vahd2OV52gTlprrHYdDjQwX_hlLJWp8EXcamV55BLw&oe=650C8596"className="card-img-top" alt="test" />
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