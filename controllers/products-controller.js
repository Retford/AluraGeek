import { productServices } from '../services/product-service.js'

const containerStarWars = document.querySelector('#containerStarWars')
const containerConsolas = document.querySelector('#containerConsolas')
const containerDiversos = document.querySelector('#containerDiversos')

const containerProduct = (img, nombre, precio, categoria, id) => {
  const productStarWars = document.createElement('div')
  productStarWars.classList.add('flex', 'flex-col', 'gap-2')
  const content = `
  <a href="/public/pages/single-product.html?id=${id}">
    <img
      src="${img}"
      alt="star1"
      width="176" height="176"
      class="w-full h-44 object-cover"
    />
  </a>
  <h3 class="text-sm font-medium">${nombre}</h3>
  <span class="text-base font-bold text-colorTitulo"
    >S/. ${precio}</span
  >
  <a href="/public/pages/single-product.html?id=${id}" class="text-sm font-bold text-colorBtn sm:text-base"
    >Ver producto</
  >`

  productStarWars.innerHTML = content
  return productStarWars
}

productServices.listProducts().then((res) => {
  res.map(({ img, nombre, precio, categoria, id }) => {
    const contentProduct = containerProduct(img, nombre, precio, categoria, id)
    if (categoria === 'star wars') {
      return containerStarWars.appendChild(contentProduct)
    } else if (categoria === 'consolas') {
      containerConsolas.appendChild(contentProduct)
    } else {
      containerDiversos.appendChild(contentProduct)
    }
    return contentProduct
  })
})
