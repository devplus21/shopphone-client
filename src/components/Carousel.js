const Carousel = ({ images, id }) => {
  const isActive = (index) => {
    if (index === 0) return 'active'
  }

  return (
    <div id={`image${id}`} className="carousel slide">
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div key={index} className={`carousel-item ${isActive(index)}`}>
            <img
              src={img.url}
              className="d-block w-100"
              alt={img.url}
              style={{ borderRadius: '11px', width: '255px ', height: '240px' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
