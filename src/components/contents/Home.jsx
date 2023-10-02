// import { categories } from "../../data/Data";
import { Link } from "react-router-dom";
import "../../styles/contents/Home.css";
import DisplayCard from "../common/DisplayCard";
import SummaryHeader from "../common/SummaryHeader";
import TrandingCard from "../common/TrandingCard";
import CardSlide from "../common/CardSlide";
// import FullWidthCard from "../common/FullWidthCard";
import FullWidthSlider from "../common/FullWidthSlider";

const Home = () => {
  return (
    <div>
      
      <div className="row g-0 justify-content-center">
        <div className="hero-img col-4">
          
        </div>
        <div className="hero-content col text-white d-flex flex-column align-items-center justify-content-start">
          <h1 className="mt-5">Kimonos, Caftans & Pareos</h1>
          <h3>Poolside glam included From $4.99</h3>
          <Link className="btn btn-primary">Shop now</Link>
        </div>
      </div>
     <SummaryHeader title="Flash Sales" to="/"/>
      <div className="container-fluid">
        <div className="row justify-content-center  ">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
         
        </div>
      </div>

      <SummaryHeader title="Trending" to="/"/>
      <div className="container-fluid">
        <div className="row justify-content-center  ">
          <TrandingCard/>
          <TrandingCard/>
          <TrandingCard/>
          <TrandingCard/>
          <TrandingCard/>
         
        </div>
      </div>
      <SummaryHeader title="Top Rated" to="/"/>
      <div className="container-fluid">
        <div className="row justify-content-center  ">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
         
        </div>
      </div> 
      <SummaryHeader title="Our Best Catogeries" to="/"/>
         <div className="row g-0 px-5 justify-content-around">         
            <CardSlide/>
            <CardSlide/>          
          </div> 

            <FullWidthSlider/>
          <div className="row px-5 g-0 justify-content-around">         
            <CardSlide/>
            <CardSlide/>          
          </div>
    </div>
  );
};

export default Home; 
