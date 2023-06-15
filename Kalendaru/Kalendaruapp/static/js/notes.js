let buttonsNote = document.querySelectorAll('.note')
let inputNoteName = document.querySelectorAll('.inputNoteName')
let inputNoteAction = document.querySelectorAll('.inputNoteAction')
let inputNoteDesc = document.querySelectorAll('.inputNoteDesc')
let inputNoteDate = document.querySelectorAll('.inputNoteDate')
console.log($(".remove-note").attr('name'))
buttonsNote.forEach(function (buttonNote, index, buttonsNote) {
    buttonNote.addEventListener('click', function () {
        let close = buttonNote.closest('div');
        let name = close.querySelector('.noteName');
        let action = close.querySelector('.noteAction')
        let desc = close.querySelector('.noteDesc')
        let date = close.querySelector('.noteDate')
        // let dateFormat = dateNew.toISOString().split('T')[0]
        // console.log(name.textContent, action.value, desc.value, date.textContent)
        inputNoteName[1].value = name.textContent
        inputNoteAction[1].value = action.value
        inputNoteDesc[1].value = desc.value
        inputNoteDate[1].value = date.textContent
    })
})
let buttonClose = document.querySelector('.close-modal-window');

let buttonOpen = document.querySelector('.add-note-button')
let modalWindow = document.querySelector('.add-note-modal')
function openModalWindow(event) {
    function showCover() {
        let coverDiv = document.createElement('div');
        coverDiv.classList.add('cover-div');
        document.body.append(coverDiv);
        coverDiv.style.opacity = 1;
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
    buttonClose.style.display = 'none'
    coverdiv.style.opacity = 0;
    modalWindow.style.opacity = 0;
    setTimeout(function () { modalWindow.style.display = 'none'; coverdiv.remove(); }, 200)
})