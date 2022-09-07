import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../redux/actions/globalTypes'
import { createPost, updatePost } from '../redux/actions/productAction'
import MDEditor from './MarkDownEdior/MDEditor'
import { toast } from 'react-toastify'
import { imageShow } from '../utils/imageUpload'

const ProductModal = () => {
  const dispatch = useDispatch()
  const { auth, status } = useSelector((state) => state)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [images, setImages] = useState([])

  const handleChangeImages = (e) => {
    const files = [...e.target.files]
    let err = ''
    let newImages = []

    files.forEach((file) => {
      if (!file) return (err = 'Tập Tin Không Tồn Tại.')

      if (file.size > 1024 * 1024 * 10) {
        return (err = 'Dung Lượng Tối Đa 10mb.')
      }

      return newImages.push(file)
    })

    if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } })
    setImages([...images, ...newImages])
  }

  const deleteImages = (index) => {
    const newArr = [...images]
    newArr.splice(index, 1)
    setImages(newArr)
  }

  const handleSubmit = (e) => {
    // fix reload form
    e.preventDefault()

    if (images.length === 0) return toast.error('Vui lòng thêm ảnh sản phẩm')

    if (category === '') return toast.error('Vui lòng chọn danh mục sản phẩm')

    // if (typeof price == typeof 'string')
    //   return toast.error('Vui Lòng giá bán chỉ được nhập số')
    if (status.onEdit) {
      dispatch(
        updatePost({
          title,
          description,
          price,
          category,
          auth,
          images,
          status,
        }),
      )
      toast.success('Cập nhập sản phẩm thành công')
    } else {
      dispatch(
        createPost({ title, description, images, price, category, auth }),
      )
      toast.success('Thêm sản phẩm thành công')
    }

    setTitle('')
    setDescription('')
    setPrice('')
    setImages('')
    setCategory('')

    dispatch({ type: GLOBALTYPES.STATUS, payload: false })
  }

  useEffect(() => {
    if (status.onEdit) {
      setTitle(status.title)
      setDescription(status.description)
      setPrice(status.price)
      setImages(status.images)
      setCategory(status.category)
    }
  }, [status])

  return (
    <div className="product_modal">
      <form onSubmit={handleSubmit}>
        <div className="status_header">
          <h5 className="m-0"> Thêm sản phẩm </h5>
          <span
            onClick={() =>
              dispatch({
                type: GLOBALTYPES.STATUS,
                payload: false,
              })
            }
          >
            &times;
          </span>
        </div>

        <div className="header_product">
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Danh mục sản phẩm:</label>
            <select
              className="form-control "
              name="categorys"
              // defaultValue={1}
              onChange={(e) =>
                setCategory(e.target.options[e.target.selectedIndex].text)
              }
            >
              <option value={1}>Thiết bị điện tử</option>
              <option value={2}>Phụ kiện điện tử</option>
              <option value={3}>Thời trang</option>
              <option value={4}>Sức khỏe & Làm đẹp</option>
              <option value={5}>Hàng gia dụng & Đời sống</option>
              <option value={6}>Siêu Thị Tạp Hóa</option>
              <option value={7}>Hàng Gia dụng & Đời sống</option>
              <option value={8}>Thời trang & Phụ kiện Trẻ Em</option>
              <option value={9}>Thể Thao & Du Lịch</option>
              <option value={10}>Ôtô, Xe Máy & Thiết Bị Định Vị</option>
            </select>
          </div>
          <div className="form-group">
            <label>Giá bán:</label>
            <input
              type="tel"
              className="form-control"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
              minlength="1"
              maxlength="5"
            />
          </div>
        </div>

        <label>Mô tả sản phẩm: </label>
        <MDEditor
          name="des"
          value={description}
          style={{ height: '420px' }}
          onChange={setDescription}
        />
        <div className="product_footer">
          <div className="input_images w-50">
            <div className="file_upload ">
              <button className="btn btn-success w-100" type="submit">
                <input
                  type="file"
                  name="file"
                  id="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleChangeImages}
                />
                Chọn ảnh
              </button>
            </div>
          </div>
          <div className="show_images">
            {images.map((img, index) => (
              <div key={index} id="file_img">
                {img.url ? (
                  <>{!img.url.match(/video/i) && imageShow(img.url)}</>
                ) : (
                  <>
                    {!img.type.match(/video/i) &&
                      imageShow(URL.createObjectURL(img))}
                  </>
                )}

                <span onClick={() => deleteImages(index)}>&times;</span>
              </div>
            ))}
          </div>
          <div className="input_images w-50">
            <button className="btn btn-success w-100" type="submit">
              {!status.onEdit ? 'Thêm' : 'Cập nhập'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductModal
