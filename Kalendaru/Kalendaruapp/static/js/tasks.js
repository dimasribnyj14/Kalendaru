let doneScroll = document.querySelector('.done-scroll')
let undoneScroll = document.querySelector('.undone-scroll')
let buttonsNote = document.querySelectorAll('.task')
let inputNoteName = document.querySelector('.inputTaskName')
let inputNoteAction = document.querySelector('.inputTaskAction')
let inputNoteDesc = document.querySelector('.inputTaskDesc')
let inputNoteDate = document.querySelector('.inputTaskDate')
console.log($(".remove-note").attr('name'))
buttonsNote.forEach(function (buttonNote, index, buttonsNote) {
    buttonNote.addEventListener('click', function () {
        let close = buttonNote.closest('div');
        let name = close.querySelector('.taskName');
        let action = close.querySelector('.taskAction')
        let desc = close.querySelector('.taskDesc')
        let date = close.querySelector('.taskDate')
        // let dateFormat = dateNew.toISOString().split('T')[0]
        // console.log(name.textContent, action.value, desc.value, date.textContent)
        inputNoteName.value = name.textContent
        inputNoteAction.value = action.value
        inputNoteDesc.value = desc.value
        inputNoteDate.value = date.textContent
    })
})
$('.done-button').on('click', function (event) {
    doneScroll.scrollIntoView({ behavior: 'smooth' });
})
$('.undone-button').on('click', function (event) {
    undoneScroll.scrollIntoView({ behavior: 'smooth' });
})
let buttonClose = document.querySelector('.close-modal-window');

let buttonOpen = document.querySelector('.add-task-button')
let modalWindow = document.querySelector('.add-task-modal')
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