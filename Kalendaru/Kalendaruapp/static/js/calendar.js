const scrollContainer = document.querySelector(".months");
let days = document.querySelectorAll('.day')
let months = document.querySelectorAll('.month')
let notes = document.querySelectorAll('.noteObj')
let tasks = document.querySelectorAll('.taskObj')
let actions = document.querySelectorAll('.actionObj')
let areaName = document.querySelector('.area-name')
let areaDate = document.querySelector('.area-date')
let areaEvent = document.querySelector('.area-event')
let areaDesc = document.querySelector('.area-desc')
let monthsList
const language = navigator.language || navigator.userLanguage;
if (language == 'ru-RU') {
    monthsList = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
}
else if (language == 'uk-UK') {
    monthsList = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
}

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();

    if (evt.deltaY >= -15 && evt.deltaY <= 15) {
        scrollContainer.scrollLeft += (evt.deltaY * 40);
    }

    else {
        scrollContainer.scrollLeft += (evt.deltaY * 5);
    }
});

console.log(language);
let buttonClose = document.querySelector('.legend-close');
let buttonOpen = document.querySelector('.legend')
let modalWindow = document.querySelector('.modalLegend')
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
    coverdiv.style.opacity = 0;
    modalWindow.style.opacity = 0;
    setTimeout(function () { modalWindow.style.display = 'none'; coverdiv.remove(); }, 200)

})
var todaydate = new Date();
var dd = String(todaydate.getDate()).padStart(2, '0');
var mm = String(todaydate.getMonth() + 1).padStart(2, '0'); //January is 0!
let monthName
let today = dd + ' ' + mm;
$(".calendar-content").attr('id', today.split(' ')[1])
function SearchActionsDay() {
    if ($(".calendar-content").attr('id') == '01') {
        monthName = monthsList[0]
    }
    else if ($(".calendar-content").attr('id') == '02') {
        monthName = monthsList[1]
    }
    else if ($(".calendar-content").attr('id') == '03') {
        monthName = monthsList[2]
    }
    else if ($(".calendar-content").attr('id') == '04') {
        monthName = monthsList[3]
    }
    else if ($(".calendar-content").attr('id') == '05') {
        monthName = monthsList[4]
    }
    else if ($(".calendar-content").attr('id') == '06') {
        monthName = monthsList[5]
    }
    else if ($(".calendar-content").attr('id') == '07') {
        monthName = monthsList[6]
    }
    else if ($(".calendar-content").attr('id') == '08') {
        monthName = monthsList[7]
    }
    else if ($(".calendar-content").attr('id') == '09') {
        monthName = monthsList[8]
    }
    else if ($(".calendar-content").attr('id') == '10') {
        monthName = monthsList[9]
    }
    else if ($(".calendar-content").attr('id') == '11') {
        monthName = monthsList[10]
    }
    else if ($(".calendar-content").attr('id') == '12') {
        monthName = monthsList[11]
    }
    else {
        console.log($(".calendar-content").attr('id'))
    }
    console.log(monthName)
    days.forEach(function (day, index, days) {
        if (day.textContent == today.split(' ')[0]) {
            day.style.boxShadow = '0px 0px 5px 1px #000000'
        }
        // console.log(day.textContent)
        tasks.forEach(function (task, index, tasks) {
            let dateTask = task.querySelector('.taskDate')
            let completeTask = task.querySelector('.taskComplete')
            let valueDay = dateTask.value.split(' ')[0]
            let valueMonth = dateTask.value.split(' ')[1]
            if (valueMonth == monthName) {
                if (valueDay == day.textContent) {
                    if (completeTask.value == 'False') {
                        day.style.background = '#D0FAFB'
                    }
                }
            }
            day.addEventListener('click', function () {
                let nameTask = task.querySelector('.taskName');
                let descTask = task.querySelector('.taskDesc');
                let actionTask = task.querySelector('.taskEvent');
                areaName.textContent = nameTask.value
                areaEvent.textContent = actionTask.value
                areaDesc.textContent = descTask.value
                areaDate.textContent = dateTask.value
            })

        })
        notes.forEach(function (note, index, notes) {
            let dateNote = note.querySelector('.noteDate')
            let valueDay = dateNote.value.split(' ')[0]
            let valueMonth = dateNote.value.split(' ')[1]
            // console.log(valueDay)
            if (valueMonth == monthName) {
                if (valueDay == day.textContent) {
                    day.style.background = '#D0FAFB'
                }
            }
            day.addEventListener('click', function () {
                let nameNote = note.querySelector('.noteName');
                let descNote = note.querySelector('.noteDesc');
                let actionNote = note.querySelector('.noteEvent');
                areaName.textContent = nameNote.value
                areaEvent.textContent = descNote.value
                areaDesc.textContent = actionNote.value
                areaDate.textContent = dateNote.value
            })
        })
        actions.forEach(function (action, index, actions) {
            let dateAction = action.querySelector('.actionDate')
            let valueDay = dateAction.value.split(' ')[0]
            let valueMonth = dateAction.value.split(' ')[1]
            if (valueMonth == monthName) {
                if (valueDay == day.textContent) {
                    let isOffical = action.querySelector('.actionOfficial')
                    let isKalendaru = action.querySelector('.actionKalendaru')
                    if (isOffical.value == 'True') {
                        day.style.background = '#FFDE66'
                    }
                    else if (isKalendaru.value == 'True') {
                        day.style.background = '#00FFB3'
                    }
                    else {
                        console.log("go")
                    }
                }
            }
            day.addEventListener('click', function () {
                let nameAction = action.querySelector('.actionName');
                let descAction = action.querySelector('.actionDesc');
                let actionAction = action.querySelector('.actionEvent');
                areaName.textContent = nameAction.value
                areaEvent.textContent = descAction.value
                areaDesc.textContent = actionAction.value
                areaDate.textContent = dateAction.value
            })
        })

    })
}

months.forEach(function (month, index, months) {
    if ($(".calendar-content").attr('id') == month.id) {
        month.style.color = '#555555'
    }
    month.addEventListener('click', function () {
        $(".calendar-content").attr('id', month.id)
        days.forEach(function (day, index, days) {
            day.style.background = 'rgba(0,0,0,0)'
        })
        if ($(".calendar-content").attr('id') == month.id) {
            months.forEach(function (month, index, months) {
                month.style.color = 'black'
            })
            month.style.color = '#555555'
            SearchActionsDay()
        }
    })
})
SearchActionsDay()