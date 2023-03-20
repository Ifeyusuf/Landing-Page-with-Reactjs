import React from 'react';
import './home.css';
import images from "../images/white.png";
import {AiOutlineStar} from "react-icons/ai";
import {MdOutlineBookmarkAdded, MdDevices, MdDiscount} from "react-icons/md";
import {FaShippingFast} from "react-icons/fa";
import {BsPlayCircle} from "react-icons/bs";

const Hero = () => {
  return (
    <>
    <section className='vh-100'>
      <div className="container ">
        <article className='row d-colum d-md-colum mt-2 '>

          <div className="col-2 ">
            <div className="py-px">
            <h1 className='fs-4 fs-sm-2 py-1'>Play Unlimited</h1>
            <p className='py-1'>Microsoft Xbox Series X/S <br /> Controller White</p>
            <p>Highly-quality joysticks for all types of gamening consiolesn <br /> and personal computers. Don't miss out on this </p>
            <div className="d-flex gap-2 py-2">
              <button className='btn-control fs-px cursor box-shadow rounded'>Buy Now</button>
              <button className='btn-control fs-px flex-div d-flex gap-10 cursor box-shadow rounded'><span className='fs-2'><BsPlayCircle/></span>Watch video</button>
            </div>
            </div>
          </div>

          <div className="col-6">
            <div className="ps4  cursor overflow-y mb-md-3 mb-sm-3">
              <img src={images} alt="PS4" />
            </div>
          </div>
        </article>
        
        <article className='box-container py-1 gap-sm-10  mt-md-3 py-lg-2'>
        <div className="box box-shadow cursor">
          <p className='flex-div gap-10'><AiOutlineStar/><span>Firt all exclusive</span></p>
        </div>
        <div className="box box-shadow cursor">
          <p className='flex-div gap-10'><MdOutlineBookmarkAdded/><span>5 Years Guarante</span></p>
        </div>
        <div className="box box-shadow cursor">
          <p className='flex-div gap-10'> <MdDevices/><span>Goes to all devices</span></p>
        </div>
        <div className="box box-shadow cursor">
          <p className='flex-div gap-10'><FaShippingFast/><span>Free Shipping</span></p>
        </div>
        <div className="box box-shadow cursor">
          <p className='flex-div gap-10'> <MdDiscount/><span>1 Year discount</span></p>
        </div>

      </article>
      </div>
    </section>
    <div className="container py-1 mt-md-3 mx-center ">
      <article className='box-container py-1 gap-sm-10  mt-md-3 gap-2 mt-2 py-lg-2 box-container-lg box-container-sm box-container-md  '>
        <div className="box-2 box-shadow cursor">
          <p className='flex-div fs-3 flex-center text-blue fw-bold'><AiOutlineStar/></p>
          <p className='py-px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum possimus pariatur laboriosam illo molestias odit officia, aperiam debitis ex.</p>
        </div>
        <div className="box-2 box-shadow cursor">
          <p className='flex-div fs-3 flex-center text-blue fw-bold'><MdOutlineBookmarkAdded/></p>
          <p className='py-px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum possimus pariatur laboriosam illo molestias odit officia, aperiam debitis ex.</p>
        </div>
        <div className="box-2 box-shadow cursor">
          <p className='flex-div fs-3 flex-center text-blue fw-bold'><MdDevices/></p>
          <p className='py-px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum possimus pariatur laboriosam illo molestias odit officia, aperiam debitis ex.</p>
        </div>
        <div className="box-2 box-shadow cursor">
          <p className='flex-div fs-3 flex-center text-blue fw-bold'><FaShippingFast/></p>
          <p className='py-px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum possimus pariatur laboriosam illo molestias odit officia, aperiam debitis ex.</p>
        </div>
        <div className="box-2 box-shadow cursor mx-center-lg">
          <p className='flex-div fs-3 flex-center text-blue fw-bold'><MdDiscount/></p>
          <p className='py-px'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum possimus pariatur laboriosam illo molestias odit officia, aperiam debitis ex.</p>
        </div>

      </article>
    </div>
    </>
  )
}

export default Hero
