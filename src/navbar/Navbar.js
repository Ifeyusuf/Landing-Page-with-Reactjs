import { Link } from "react-router-dom";
import "../navbar/navbar.css";
import {BiMenuAltRight} from "react-icons/bi";
import images from "../images/white.png";
import {useState, useEffect, useRef} from "react";

const Navbar = () => {
  const [showLink, setshowLink] = useState(false);
  const refLinks= useRef (null);
  const refContainer= useRef (null);

  useEffect( ()=>{
    const linksHeight= refLinks.current.getBoundingClientRect().height;
    
    if(showLink){
      refContainer.current.style.height= ` ${linksHeight}px`
    }
    else{
      refContainer.current.style.height=0
    }
  },[showLink])

  return (
    <section className="box-shadow">
      <div className="container header ">
        <article className="row justify-between justify-between-sm d-colum flex-div-sm ">
          
            <div className=" row justify-between flex-div width ">
              <div className="d-flex flex-div cursor">
            <div className="logo mt-p">
              <img src={images} alt=""  className="logo  flex-div"/>
            </div>
            <div className="rounded-circle ms-1 round">
            <h3 className=" text-blue round">PS</h3>
            </div>
            </div>

            {/* MOBILE ONLY */}
              <div className=" menu mobile-only flex-div cursor" onClick={ ()=> setshowLink(!showLink)}>
                <BiMenuAltRight className="flex-div"/>
              </div>
            </div>

          <div className="links-container mt-px"  ref={refContainer}>
              <ul className="links" ref={refLinks}>
              <Link to="/" className="link"> Home</Link>
            <Link to="product" className="link"> Product</Link>
            <Link to="contact" className="link"> Contact</Link>
              </ul>
          </div>
          <div className="sign-in pc-only">
            <button className="btn flex-div">Sign-in</button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Navbar
