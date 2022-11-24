import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "SHIPCODE TOÀN QUỐC",
      decs: "Freeship nội thành khi mua máy. (Giao trong vòng 3 giờ).",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "HÌNH THỨC THANH TOÁN",
      decs: "Thanh toán linh hoạt với nhiều phương thức như Visa, thẻ tín dụng...",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "BẢO MẬT THÔNG TIN ",
      decs: "Bảo mật không tiết lộ thông tin khách hàng ra bên ngoài.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "HỖ TRỢ 24/7 ",
      decs: "Dịch vụ hỗ trợ khách hàng 24/7 (kể cả ngày lễ).",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper