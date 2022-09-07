import { getDataAPI, patchDataAPI, postDataAPI } from '../../api/fetchData'
import { imageUpload } from '../../utils/imageUpload'
import { GLOBALTYPES } from './globalTypes'

export const PRODUCT_TYPES = {
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  GET_PRODUCTS: 'GET_PRODUCTS',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  GET_PRODUCT: 'GET_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
}

export const createPost =
  ({ title, description, category, images, price, auth }) =>
  async (dispatch) => {
    console.log({ title, description, category, images, price, auth })
    let media = []
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

      if (images.length > 0) {
        media = await imageUpload(images)
      }
      const res = await postDataAPI(
        'products',
        { title, description, category, images: media, price },
        auth.token,
      )

      dispatch({
        type: PRODUCT_TYPES.CREATE_PRODUCT,
        payload: { ...res.data.newProduct, user: auth.user },
      })

      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      })
    }
  }

export const getPosts = (token) => async (dispatch) => {
  try {
    const res = await getDataAPI('products', token)

    dispatch({
      type: PRODUCT_TYPES.GET_PRODUCTS,
      payload: { ...res.data, page: 2 },
    })
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: err.response.data.msg },
    })
  }
}

export const updatePost =
  ({ title, description, category, price, images, auth, status }) =>
  async (dispatch) => {
    let media = []
    const imgNewUrl = images.filter((img) => !img.url)
    const imgOldUrl = images.filter((img) => img.url)

    if (
      status.title === title &&
      status.description === description &&
      status.category === category &&
      imgNewUrl.length === 0 &&
      imgOldUrl.length === status.images.length &&
      status.price === price
    )
      return
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

      const res = await patchDataAPI(
        `product/${status._id}`,
        {
          title,
          description,
          images: [...imgOldUrl, ...media],
          category,
          price,
        },
        auth.token,
      )

      dispatch({
        type: PRODUCT_TYPES.UPDATE_PRODUCT,
        payload: res.data.newProduct,
      })
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      })
    }
  }

export const getPost =
  ({ detailProduct, id, auth }) =>
  async (dispatch) => {
    if (detailProduct.every((product) => product._id !== id)) {
      try {
        const res = await getDataAPI(`product/${id}`, auth.token)
        console.log({ res })
        dispatch({ type: PRODUCT_TYPES.GET_PRODUCT, payload: res.data.product })
      } catch (err) {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { error: err.response.data.msg },
        })
      }
    }
  }

export const deletePost =
  ({ product, auth }) =>
  async (dispatch) => {
    console.log({ product })
    try {
      // const res = await deleteDataAPI(`product/${product._id}`, auth.token)
      dispatch({ type: PRODUCT_TYPES.DELETE_PRODUCT, payload: product })
    } catch (err) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: err.response.data.msg },
      })
    }
  }
