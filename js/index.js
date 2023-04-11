const funcionalidadAluraGeek = (() => {
  'use strict';
  const btnLogin = document.querySelector('#btnLogin');
  const btnAddProduct = document.querySelector('#btnAddProduct');
  const btnAdministrador = document.querySelector('#btnAdministrador');

  if (btnLogin) {
    btnLogin.addEventListener('click', () => {
      window.location.href = './pages/login.html';
    });
  }

  if (btnAddProduct) {
    btnAddProduct.addEventListener('click', () => {
      window.location.href = './add-products.html';
    });
  }

  if (btnAdministrador) {
    btnAdministrador.addEventListener('click', () => {
      window.location.href = './products.html';
    });
  }
})();
