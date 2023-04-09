import { productServices } from '../services/product-service.js'

const createNewProduct = (img, nombre, precio, id) => {
  const divProduct = document.createElement('div')
  divProduct.classList.add('flex', 'flex-col', 'gap-2')
  const product = `<div class="flex flex-col gap-2">
  <div class="relative">
    <img
      src=${img}
      alt="star1"
      width="176" height="176"
      class="w-full h-36 sm:h-44 lg:w-44 object-contain"

    />
    <div
      class="absolute right-0 top-0 text-white flex gap-4 pt-2 pr-2"
    >
    <button type="button" id="${id}" class="trashIcon">
    <i class="fa-solid fa-trash w-6 h-6 text-lg"></i>
    </button>
    <a href="../pages/edit-products.html?id=${id}">
    <i class="fa-solid fa-pen w-6 h-6 text-lg"></i>
    </a>
    </div>
  </div>
  <h3 class="text-sm font-medium">${nombre}</h3>
  <span class="text-base font-bold text-colorTitulo"
    >S/. ${precio}</span
  >
  <span class="text-sm font-medium text-colorTitulo sm:text-base"
    ># ${id}</span
  >
</div>`
  divProduct.innerHTML = product
  const trashIcon = divProduct.querySelector('.trashIcon')
  trashIcon.addEventListener('click', async () => {
    try {
      const id = trashIcon.id
      console.log(trashIcon)
      console.log(id)
      await productServices.deleteProduct(id)
    } catch (err) {
      console.log(err)
    }
  })

  return divProduct
}

const divContainer = document.querySelector('#divContainer')

productServices
  .listProducts()
  .then((result) => {
    result.forEach(({ img, nombre, precio, id }) => {
      const newProduct = createNewProduct(img, nombre, precio, id)
      divContainer.appendChild(newProduct)
    })
  })
  .catch((err) => console.log(err))
