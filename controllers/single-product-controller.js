import { productServices } from '../services/product-service.js'

const cardSingleProduct = document.querySelector('#cardSingleProduct')
const relatedProductCards = document.querySelector('#relatedProductCards')

const singleProduct = (img, nombre, precio, descripcion) => {
  const containerProduct = document.createElement('div')
  containerProduct.classList.add(
    'sm:p-8',
    'sm:flex',
    'sm:gap-4',
    'lg:items-center',
    'lg:py-16',
    'lg:px-[152px]'
  )
  const content = `
  <img
    src="${img}"
    alt="product"
    width="560"
    height: "403"
    class="h-[270px] object-contain sm:h-[182.788px] sm:w-[254px] lg:w-[560px] lg:h-[403px]"
  />
  <div class="p-4 flex flex-col gap-2 text-colorTitulo sm:p-0">
    <h2 class="text-[22px] font-medium lg:text-[52px] lg:font-medium">${nombre}</h2>
    <span class="font-bold">S/. ${precio}</span>
    <p class="text-sm">${descripcion}</p>
  </div>`
  containerProduct.innerHTML = content
  return containerProduct
}

const obtenerInformacion = async () => {
  try {
    const url = new URL(window.location)
    const id = url.searchParams.get('id')

    const { img, nombre, precio, descripcion, categoria } =
      await productServices.detailProduct(id)
    const categoriaPrincipal = categoria
    const idPrincipal = id

    const contentCardProduct = singleProduct(img, nombre, precio, descripcion)
    cardSingleProduct.appendChild(contentCardProduct)

    // productos relacionados

    productServices.listProducts().then((res) => {
      res.filter(({ img, nombre, precio, categoria, id }) => {
        const cardDetail = relatedProductCard(
          img,
          nombre,
          precio,
          categoria,
          id
        )
        if (categoria === categoriaPrincipal && id !== idPrincipal) {
          relatedProductCards.appendChild(cardDetail)
          return true
        } else {
          // relatedProductCards.innerHTML = '<h2>No hay productos relacionados 😥😣</h2>'
          return false
        }
      })
    })
  } catch (err) {
    console.log(err)
  }
}

const relatedProductCard = (img, nombre, precio, categoria, id) => {
  const divCard = document.createElement('div')
  divCard.classList.add('flex', 'flex-col', 'gap-2')
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
    >Ver producto</a
  >`
  divCard.innerHTML = content
  return divCard
}

obtenerInformacion()
