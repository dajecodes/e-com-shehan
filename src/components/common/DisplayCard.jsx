import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DisplayCard = () => {
  return (
    <div className="card p-0 m-2 col-10 col-sm-5 col-md-4 col-lg-3 col-xxl-2 d-flex flex-column align-items-center border-0">
                    
                    
                    <img src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/378373874_206049775822600_2438062934831387086_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=813123&_nc_eui2=AeFhCYVR0MJ6dCiHiMeK93uV8eJFHU3HefXx4kUdTcd59S2UmVy6wEi5NYnIIhhevd0&_nc_ohc=jPU2xmjasIcAX-h3rhB&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&oh=00_AfArn0sftxtPijj7Ph5aLqTbAprJVc4KuBHuXBC5-d2cIQ&oe=650BA79F"className="card-img-top" alt="test" />
                    <div className="card-body">
                        <h5>Premium Quality Necklace</h5>
                        <h6>Jewelry</h6>
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
export default DisplayCard