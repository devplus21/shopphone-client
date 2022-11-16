import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick";

const TopCart = () => {
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
            Tdata.map((value, index) =>{
                return (
                    <div className="box">
                        <div className="product" key={index}>
                            <div className="nametop d_flex">
                                <span className="ttop">{value.para}</span>
                            </div>
                            <div className="img">
                                <img src={value.cover} alt="" />
                            </div>
                            <div className="topBottom">
                                <span className="tbottom">{value.desc}</span>
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

export default TopCart