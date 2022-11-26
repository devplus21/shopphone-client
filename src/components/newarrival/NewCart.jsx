import React from 'react'
import Ndata from './Ndata'
import Slider from "react-slick";
import './style.css'

const NewCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <>
    <Slider {...settings}>
     
        {
            Ndata.map((value, index) =>{
                return (
                    <div className="content">
                    <div className="box product" key={index}>
                        <div className="img">
                            <img src={value.cover} alt="" />
                            <h4>{value.name}</h4>
                            <span>{value.price} VNĐ</span>
                            <div className="rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                )
            })
        }
     
     </Slider>
    </>
  )
}

export default NewCart