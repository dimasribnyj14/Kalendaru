let notDelete = document.querySelector('.button-no-delete')
function profileOption() {
    $('.profile-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.terms-content').css("display", 'none');
    $('.policy-content').css("display", 'none');
    $('.messages-content').css("display", 'none');
    $('.language-content').css("display", 'none');
}
function notificationOption() {
    $('.messages-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.terms-content').css("display", 'none');
    $('.policy-content').css("display", 'none');
    $('.profile-content').css("display", 'none');
    $('.language-content').css("display", 'none');
}
function policyOption() {
    $('.policy-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.terms-content').css("display", 'none');
    $('.profile-content').css("display", 'none');
    $('.messages-content').css("display", 'none');
    $('.language-content').css("display", 'none');
}
function termsOption() {
    $('.terms-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.profile-content').css("display", 'none');
    $('.messages-content').css("display", 'none');
    $('.policy-content').css("display", 'none');
    $('.language-content').css("display", 'none');
}
function languageOption() {
    $('.language-content').css("display", 'flex'); // Это включается
    // То что ниже, отключаются
    $('.profile-content').css("display", 'none');
    $('.messages-content').css("display", 'none');
    $('.policy-content').css("display", 'none');
    $('.terms-content').css("display", 'none');
}
$("#input-file").change(function () {
    // $(".theAvatar").attr('src', $(".input-file").val())
    // setTimeout(function () {
    //     $('.avatar').attr('src', $('.input-file').val())
    //     $(".theAvatar").attr('src', $(".input-file").val())
    // }, 500)
    $("form#change-avatar").submit();
    // setTimeout(function () {
    //     $('.avatar').attr('src', $('.input-file').val())
    //     $(".theAvatar").attr('src', $(".input-file").val())
    // }, 500)

});
let buttonClose = document.querySelector('.button-no-delete');
let buttonOpen = document.querySelector('.delete-button')
let modalWindow = document.querySelector('.modalDelete')
function openModalWindow(event) {
    function showCover() {
        let coverDiv = document.createElement('div');
        coverDiv.classList.add('cover-div');
        document.body.append(coverDiv);
    }
    showCover();
    buttonClose.style.display = 'block'
    modalWindow.style.display = "flex";

    setTimeout(
        () => modalWindow.style.opacity = 1,
        1
    )
    let windowWidth = document.body.clientWidth;
    let windowHeight = document.body.clientHeight;
    let modalWindowWidth = modalWindow.clientWidth;
    let modalWindowHeight = modalWindow.clientHeight;
    let left = windowWidth / 2 - modalWindowWidth / 2;
    let top = windowHeight / 2 - modalWindowHeight / 2;
    modalWindow.style.top = top + "px";
    modalWindow.style.left = left + "px";
}
buttonOpen.addEventListener('click', openModalWindow)
buttonClose.addEventListener('click', function (event) {
    let coverdiv = document.querySelector('.cover-div');
    coverdiv.remove();
    modalWindow.style.display = 'none';
    modalWindow.style.opacity = 0;
    buttonClose.style.display = 'none'
})
notDelete.addEventListener('click', function (event) {
    return false;
})
$(document).ready(function () {
    $("form#change-avatar").on("submit", function (event) {
        // setTimeout(function () {
        //     $('.avatar').attr('src', $('.input-file').val())
        //     $(".theAvatar").attr('src', $(".input-file").val())
        // }, 500)

        // event.preventDefault();
        // $.ajax({
        //     type: "POST",
        //     url: $(this).action,
        //     data: $(this).serialize(),
        //     success: function () {

        //     }
        // });
    });
    $('.edit').on('click'), function () {
        $('.name')
    }
    // $('.modalDeleteDiv').on('submit', function (event) {
    //     event.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: $(this).action,
    //         data: $(this).serialize(),
    //         success: function () {

    //         }
    //     });
    // })
});