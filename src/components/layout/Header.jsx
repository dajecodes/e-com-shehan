import { Link, NavLink } from "react-router-dom";
import "../../styles/layout/Header.css";
import { categories } from "../../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faSearch,faList,faCartShopping ,faUser,faRightToBracket} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div className="container-fluid ">
      <nav className="navbar navbar-expand-md  ">
        <div className="row justify-content-around">
          <button
            className="navbar-toggler col-1 mb-2 d-flex align-items-center justify-content-center d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcontent"
            aria-controls="navbarcontentt"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Link
            to="/"
            className="navbar-brand col-6 col-md-3 d-flex justfy-content-center align-items-center mb-2"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/31df/1436/ba37da19d94a2bf474f4e05419f02fd7?Expires=1695600000&Signature=epevSYohxXs6s4Dja~bv0vNtAQdyif9ZeAMh18tBH28KDAiBzJIPqaH5QyQGHrlq4aqrsmyJXrdycTBeyO08dKvUDd1k6ve12ghxxVs76nNTtCp8XsZ5RhlzSt2ZuMXwwZv05AUbsD6g80y~h7S1VErb9EN37oxUylciQmYkzhD-p2qVJVx-E-pNFyJbFJvpRF9erhYvCmL625KHABlVHQsOCq0K~8JAP6T9jJg1sI8vRTyQztF9TiZIP0Ko39dRqGO3N9Txvq67ewdZ-OpJGn-q4prrY-LtMA0PTb6YnfykZ9Jog2m5h-QiAvyfyCCnPzhQ0QjIFeG~j0ozCfGBlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="logo"
              className="img-fluid"
              width={"25%"}
            />
            <h3>4th Avenev</h3>
          </Link>
           <div className="col-3 d-md-none d-flex justify-content-between align-items-center">
           <Link className=" text-dark">
           <FontAwesomeIcon icon={faCartShopping} size="lg" />
           </Link>
           <Link className=" text-dark">
           <FontAwesomeIcon icon={faRightToBracket} size="lg" />
           </Link>
           <Link className=" text-dark">
           <FontAwesomeIcon icon={faUser} size="lg" />
           </Link>
           </div>
          <form className="d-flex col-9 col-sm-8  col-lg-3 header-search" role="search">
            <input
              className=""
              type="search"
              placeholder="Search Products"
              aria-label="Search"
            />
            <select className="">
              <option>All categories</option>
              {categories.map((item)=>(
                <option key={item.id}>{item.title}</option>
              ))}
            </select>

            <button type="button" className="btn btn-primary">
            <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
         
          <div className="collapse navbar-collapse col-md-5  " id="navbarcontent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link">Help & Support</NavLink>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
      <div className="row  text-bg-dark d-none d-md-flex align-items-center justify-content-between " style={{height:'3rem'}} >
        <div className="col-2 h-100 d-flex justify-content-around align-items-center ">        
        <FontAwesomeIcon icon={faList}   size="xl" />
            <h3 className="m-0">Categories</h3>
        </div>
        <div className="col-5">
            News,Anounsments,Promotions etc.. goes here
        </div>
        <div className="col-3 d-flex justify-content-around align-items-center">
        
           <Link className=" text-white">
           <FontAwesomeIcon icon={faCartShopping} size="lg" />
           </Link>
           <Link className=" text-white">
           <FontAwesomeIcon icon={faRightToBracket} size="lg" />
           </Link>
           <Link className=" text-white">
           <FontAwesomeIcon icon={faUser} size="lg" />
           </Link>
           
       
                
        </div>
      </div> 

    </div>
  );
};
export default Header;
