let form = document.querySelector('#form');
let successmodal = document.getElementById('#successmodal');
console.log(form);

form.addEventListener('submit', function (event) {

    if (!form.checkValidity()) {

        event.preventDefault()
        event.stopPropagation()
    }else{
        $.ajax({
            method: "POST",
            data: $( '#form' ).serialize()
          })
        .done(function( msg ) {
            document.getElementById("#success-form").style.display = "block";
        });
    }
})