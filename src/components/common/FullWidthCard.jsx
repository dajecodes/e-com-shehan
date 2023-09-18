
const FullWidthCard = (params) => {
  return (
    <div className="container-fluid d-flex justify-content-center " style={{backgroundImage:'linear-gradient(to top, rgba(96, 141, 239, 0.3), rgba(65, 114, 220, 1)),url(https://s3-alpha-sig.figma.com/img/4cf5/e111/46135722ea74c236d099dd5c7a596146?Expires=1695600000&Signature=Qnjlf-UFqy9YwhSuJjAmbPAzid-IFC6FGQwr3qqHdcyrR7XNt8PjmHpFrKQ0X4m1xM6PYuuZe5Zr1CY8PAHuhv1g~5N443emncvbW26gJphJUCHwQSsoc~GLi5eDr6SKS2HA2maiYsSbB0py-T2qAKQ9-E7Ne7PuEJqA~ln7bMfrxEXPiOxJmLzrvU-CeqiW9czy2PpsE~hT-FnsulJkpyMsqm9ueYal-oZu1n1XdfqYtSDX5u3iXIto7RJZF1fxq6xO64VWxtCaHTCt81BRuQ1ZDE4eDPcXQJMnKSOhmiRquK2v9v76tTXGqaU1sey~jZ3Z136Fpfk0v4v~qvq4eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)', backgroundSize:'cover',height:'20vh'}} >
                 <div className="col-3">
                    <h2 className="text-center text-white">{params.title}</h2>
                 <p className="text-white text-justify">{params.text}</p>
                 </div>
                 
                    <img src="/assets/watch1.png"  alt="" />
                    <img src="/assets/watch2.png" alt="" />
                   <img src="/assets/watch1.png" alt="" /> 
                 <div className="h-100 " >
                    <button className="btn btn-dark mt-5">Shop Now</button>
                 </div>
                    
                 
         {/* Tissot-Black dial with golden ring */}


    </div>
  )
}

export default FullWidthCard