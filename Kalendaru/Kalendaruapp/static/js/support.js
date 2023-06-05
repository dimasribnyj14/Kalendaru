let inputs = document.querySelectorAll('.input')
$(document).ready(function () {
    $("#form-support").on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: $(this).action,
            data: $(this).serialize(),
            success: function () {

            }
        });
        inputs.forEach(function (input, index, inputs) {
            input.value = '';
        })
        $('textarea').val("")
        $('.success-message').css('display', 'block');
    });
});