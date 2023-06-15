// let buttonClose = document.querySelector('.close-modal');
// let buttonOpen = document.querySelector('#more-about-account')
// let modalWindow = document.querySelector('.modal-window')
// function openModalWindow(event) {
//     function showCover() {
//         let coverDiv = document.createElement('div');
//         coverDiv.classList.add('cover-div');
//         document.body.append(coverDiv);
//     }
//     showCover();
//     buttonClose.style.display = 'block'
//     modalWindow.style.display = "flex";

//     setTimeout(
//         () => modalWindow.style.opacity = 1,
//         1
//     )
//     let windowWidth = document.body.clientWidth;
//     let windowHeight = document.body.clientHeight;
//     let modalWindowWidth = modalWindow.clientWidth;
//     let modalWindowHeight = modalWindow.clientHeight;
//     let left = windowWidth / 2 - modalWindowWidth / 2;
//     let top = windowHeight / 2 - modalWindowHeight / 2;
//     modalWindow.style.top = top + "px";
//     modalWindow.style.left = left + "px";
// }
// buttonOpen.addEventListener('click', openModalWindow)
// buttonClose.addEventListener('click', function (event) {
//     let coverdiv = document.querySelector('.cover-div');

//     coverdiv.remove();
//     modalWindow.style.display = 'none';
//     modalWindow.style.opacity = 0;
//     buttonClose.style.display = 'none'
// })
function cancelForm() {
    return false;
    window.location.href = "{% url 'register' %}";
}