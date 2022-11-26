/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Annu = () => {
    const mystyle = {
        width: "31%",
        height: "250px",
    }
    const mystyle1 = {
        width: "31%",
        height: "250px",
    }
    const mystyle2 = {
        width: "31%",
        height: "250px",
    }
  return (
    <>
        <section className="annouc background">
            <div className="container d_flex">
                <div className="img" style={mystyle}>
                    <img src="./images/banner/banner2.png" width='100%' height='100%' />
                </div>
                <div className="img" style={mystyle1}>
                    <img src="./images/banner/banner3.png" width='100%' height='100%' />
                </div>
                <div className="img" style={mystyle2}>
                    <img src="./images/banner/banner4.png" width='100%' height='100%' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Annu