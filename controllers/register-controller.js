import { productServices } from '../services/product-service.js'

const formProduct = document.querySelector('[data-form]')

formProduct.addEventListener('submit', (e) => {
  e.preventDefault()
  const urlProduct = document.querySelector('[data-url]').value
  const categoryProduct = document.querySelector('[data-categoria]').value
  const nameProduct = document.querySelector('[data-nombre]').value
  const priceProduct = document.querySelector('[data-precio]').value
  productServices
    .createProduct(urlProduct, nameProduct, priceProduct, categoryProduct)
    .then((res) => {
      window.location.href = '/public/pages/products.html'
    })
})
