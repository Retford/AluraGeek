import { productServices } from '../services/product-service.js'

const formProduct = document.querySelector('[data-form]')

const obtenerInformacion = async () => {
  try {
    const url = new URL(window.location)
    const id = url.searchParams.get('id')

    if (id === null) return

    const urlProduct = document.querySelector('[data-url]')
    const categoryProduct = document.querySelector('[data-categoria]')
    const nameProduct = document.querySelector('[data-nombre]')
    const priceProduct = document.querySelector('[data-precio]')
    const description = document.querySelector('[data-descripcion]')

    const { categoria, img, nombre, precio, descripcion } =
      await productServices.detailProduct(id)

    if (categoria && img && nombre && precio && descripcion) {
      urlProduct.value = img
      categoryProduct.value = categoria
      nameProduct.value = nombre
      priceProduct.value = precio
      description.value = descripcion
    } else {
      throw new Error()
    }
  } catch (err) {
    console.log(err)
  }
}

obtenerInformacion()

formProduct.addEventListener('submit', (e) => {
  e.preventDefault()
  const urlProduct = document.querySelector('[data-url]').value
  const categoryProduct = document.querySelector('[data-categoria]').value
  const nameProduct = document.querySelector('[data-nombre]').value
  const priceProduct = document.querySelector('[data-precio]').value
  const description = document.querySelector('[data-descripcion]').value
  const url = new URL(window.location)
  console.log(url)
  const id = url.searchParams.get('id')
  console.log(id)
  productServices
    .updateProduct(
      urlProduct,
      nameProduct,
      priceProduct,
      id,
      categoryProduct,
      description
    )
    .then(() => {
      window.location.href = '/public/pages/products.html'
    })
})
