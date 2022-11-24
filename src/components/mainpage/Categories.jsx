import React from 'react'

const Categories = () => {
  const data = [
    {
      cateImg: "./images/categories/cate1.png",
      cateName: "iPhone",
    },
    {
      cateImg: "./images/categories/cate2.png",
      cateName: "Điện thoại",
    },
    {
      cateImg: "./images/categories/cate3.png",
      cateName: "iPad - Máy tính bảng",
    },
    {
      cateImg: "./images/categories/cate4.png",
      cateName: "Đồng hồ thông minh - Watch",
    },
    {
      cateImg: "./images/categories/cate5.png",
      cateName: "Laptop",
    },
    {
      cateImg: "./images/categories/cate6.png",
      cateName: "PC - Phụ kiện máy tính",
    },
    {
      cateImg: "./images/categories/cate7.png",
      cateName: "Thu cũ đổi mới",
    },
    {
      cateImg: "./images/categories/cate8.png",
      cateName: "Điện thoại cũ",
    },
    {
      cateImg: "./images/categories/promotion.png",
      cateName: "Khuyến mãi",
    },
  ]
  return (
    <>
      <div className="categories">
        {
          data.map((value, index) => {
            return(
              <div className="box f_flex" key={index}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories