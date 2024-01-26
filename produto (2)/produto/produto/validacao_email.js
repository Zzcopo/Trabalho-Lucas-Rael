function validateForm() {
    let x = document.getElementById("email-cadastro").value;

    if (x.indexOf("@") == -1 || x.indexOf("@") == 0 || x.indexOf(".") == -1) {
        alert("Não condiz com um email");
        return false;
    }
}