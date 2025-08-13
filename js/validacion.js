function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function ningunoVacio(){
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass1 = document.getElementById("password1").value.trim();
    let pass2 = document.getElementById("password2").value.trim();
    let terminos = document.getElementById("terminos").checked;
    return nombre && apellido && email && pass1 && pass2 && terminos 

}

document.getElementById("regBtn").addEventListener("click", function () {
    // Validación: ningún campo vacío y contraseñas iguales
    if (ningunoVacio() && validarPasswordsIguales() && validarLongitudPassword()) {
        showAlertSuccess();
    } else {
        setTimeout(function () {
        console.log('Han pasado 3 segundos');
         }, 3000);
        showAlertError();
    }
    location.reload(true);
});
function validarPasswordsIguales() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (password1 === password2) {
      return true;
    } else {
      
      return false;
    }
}

function validarLongitudPassword() {
  const password1 = document.getElementById('password1').value;

  if (password1.length >= 6) {
    return true;
  } else {

    return false;
  }
}

