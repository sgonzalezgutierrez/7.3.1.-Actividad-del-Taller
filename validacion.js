function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded', function() {
    var regBtn = document.getElementById('regBtn');
    if (regBtn) {
        regBtn.addEventListener('click', function(e) {
            var terminos = document.getElementById('terminos');
            if (!terminos.checked) {
                showAlertError();
                e.preventDefault();
            } else {
                showAlertSuccess();
            }
        });
    }
});