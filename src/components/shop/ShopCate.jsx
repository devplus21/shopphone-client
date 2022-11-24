import React from 'react'

const ShopCate = () => {
        const data = [
          {
            cateImg: "./images/categories/cat1.png",
            cateName: "Apple",
          },
          {
            cateImg: "./images/categories/cat2.png",
            cateName: "Samsung",
          },
          {
            cateImg: "./images/categories/cat3.png",
            cateName: "MSI ",
          },
          {
            cateImg: "./images/categories/cat4.png",
            cateName: "Asus",
          },
        ]
  return (
    <>
        <div className="category boxShadow">
            <div className="chead d_flex">
                <h1>Hãng sản xuất</h1>
            </div>
            {
                data.map((value, index) =>{
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt="" />
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
            <div className="box box2">
                <button>Xem tất cả hãng sản xuất</button>
            </div>
        </div>
    </>
  )
}

export default ShopCate