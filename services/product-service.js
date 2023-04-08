const URL_API = 'http://localhost:3000/productos'

const listProducts = () => fetch(URL_API).then((res) => res.json())

const createProduct = (img, nombre, precio, categoria) => {
  return fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ img, nombre, precio, categoria, id: uuid.v4() })
  })
}

const deleteProduct = (id) => fetch(`${URL_API}/${id}`, { method: 'DELETE' })

const detailProduct = (id) => { return fetch(`${URL_API}/${id}`).then((res) => res.json()) }

const updateProduct = async (img, nombre, precio, id, categoria) => {
  try {
    return await fetch(`${URL_API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ img, nombre, precio, categoria })
    })
  } catch (err) {
    console.log(err)
  }
}

export const productServices = {
  listProducts,
  createProduct,
  deleteProduct,
  detailProduct,
  updateProduct
}
