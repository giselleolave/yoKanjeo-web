var ValidarEmail = function() {
    var form = document.getElementById("recerva");
    if (!form.aInteger.value || isNaN(parseInt(form.aInteger.value))) {
        return false;
    }
    if (!form.rut.value || isNaN(parseFloat(form.aFloat.value))) {
        return false;
    }
    if (form.name.value.length < 10) {
        return false;
    }
    var emailRegex = /^\w+@\w+\.\w+$/;
    if (!form.email.value.match(emailRegex)) {
        return false;
    }
    if (form.aSelect.value == "Select one") {
        return false;
    }
    return true;
}



$(function() {
    $("recerva").validate({

        rules: {
            // name del elemento
            name: {
                required: true,
                minLength: 3
            },
            // name del elemento
            rut: {
                required: true,
                minLength: 9
            },

            // name del elemento

        },
        messages: {
            name: {
                // cuando la casilla está vacia
                required: "Porfavor Ingrese un nombre",
                // cuando el nombre no tenga el largo minimo
                name: "El nombre ingresado debe tener un largo de 3 caracteres"
            },



        }
    });

});