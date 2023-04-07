const funcionalidadAluraGeek = (() => {
  'use strict'
  const btnLogin = document.querySelector('#btnLogin')
  const btnEntrar = document.querySelector('#btnEntrar')
  const btnAddProduct = document.querySelector('#btnAddProduct')
  const btnAddProductSave = document.querySelector('#btnAddProductSave')

  if (btnLogin) {
    btnLogin.addEventListener('click', () => {
      window.location.href = './pages/login.html'
    })
  }

  if (btnEntrar) {
    btnEntrar.addEventListener('click', () => {
      window.location.href = './products.html'
    })
  }

  if (btnAddProduct) {
    btnAddProduct.addEventListener('click', () => {
      window.location.href = './add-products.html'
    })
  }

  if (btnAddProductSave) {
    btnAddProductSave.addEventListener('click', () => {
      window.location.href = './products.html'
    })
  }
})()
