export const validar = (input) => {
  const tipoInput = input.dataset.tipo;

  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalid');
    input.parentElement.querySelector('.input-message-error').innerHTML = '';
  } else {
    input.parentElement.classList.add('input-container--invalid');
    input.parentElement.querySelector('.input-message-error').innerHTML =
      mostrarMensajeError(tipoInput, input);
  }
};

const tipoErrores = ['valueMissing', 'typeMismatch', 'patternMismatch'];

const mensajesError = {
  email: {
    valueMissing: 'El campo correo no puede estar vacío',
    typeMismatch: 'El correo no es válido',
  },
  password: {
    valueMissing: 'El campo contraseña no puede estar vacío',
    patternMismatch:
      'Debe ser de al menos 6 caracteres, máximo 12, contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales',
  },
};

const mostrarMensajeError = (tipoInput, input) => {
  let mensaje = '';
  tipoErrores.forEach((err) => {
    if (input.validity[err]) {
      console.log(tipoInput, err);
      console.log(input.validity[err]);
      console.log(mensajesError[tipoInput][err]);
      console.log(err);
      mensaje = mensajesError[tipoInput][err];
    }
  });
  return mensaje;
};
