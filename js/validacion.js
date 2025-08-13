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
    if (ningunoVacio()) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});
function validarPasswordsIguales() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (password1 === password2) {
      alert('Las contraseñas coinciden');
      return true;
    } else {
      alert('Las contraseñas no coinciden');
      return false;
    }
}

