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
let calButtons = document.querySelectorAll('.button-cal')
let taskornote = document.querySelector('.taskornote')
let pkForm = document.querySelector('.pkForm')
let monthDayNone
let monthsList
let done = false
const language = navigator.language || navigator.userLanguage;
if (language == 'ru-RU') {
    monthsList = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
}
else if (language == 'uk-UK') {
    monthsList = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
} else {
    monthsList = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
}

scrollContainer.addEventListener("wheel", (evt) => {
    if (done == false) {
        done = true
        evt.preventDefault();

        if (evt.deltaY >= -15 && evt.deltaY <= 15) {
            scrollContainer.scrollLeft += (evt.deltaY * 40);
        }

        else {
            scrollContainer.scrollLeft += (evt.deltaY * 5);
        }
    }
    setTimeout(function () {
        done = false
    }, 100)
});

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
var yyyy = todaydate.getFullYear()
let monthName
let today = dd + ' ' + mm + ' ' + yyyy;
$(".calendar-content").attr('id', today.split(' ')[1])
function SearchActionsDay() {
    monthDayNone = document.querySelectorAll('.no-day-month')
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
    days.forEach(function (day, index, days) {
        months.forEach(function (month, index, months) {
            if ($(".calendar-content").attr('id') == today.split(' ')[1]) {
                if (day.textContent == today.split(' ')[0]) {
                    day.style.boxShadow = '0px 0px 5px 1px #000000'
                }
            }
        })

        monthDayNone.forEach(function (daynone, index, monthDayNone) {
            daynone.classList.add('day')
            daynone.classList.remove('no-day-month')
        })
        if ($(".calendar-content").attr('id') == '02') {
            if (index >= 28) {
                day.classList.add('no-day-month')
                day.classList.remove('day')
            }
        } else if ($(".calendar-content").attr('id') == '04' || $(".calendar-content").attr('id') == '06' || $(".calendar-content").attr('id') == '09' || $(".calendar-content").attr('id') == '11') {
            if (index >= 30) {
                day.classList.add('no-day-month')
                day.classList.remove('day')
            }
        } else {
            monthDayNone.forEach(function (daynone, index, monthDayNone) {
                daynone.classList.add('day')
                daynone.classList.remove('no-day-month')
            })
        }
        // console.log(day.textContent)
        notes.forEach(function (note, index, notes) {
            let dateNote = note.querySelector('.noteDate')
            let valueDay = dateNote.value.split(' ')[0]
            let valueMonth = dateNote.value.split(' ')[1]
            let notePK = note.querySelector('.notePk')
            // console.log(valueDay)
            let valueYear = dateNote.value.split(' ')[2]
            if (valueYear == today.split(' ')[2]) {
                if (valueMonth == monthName) {
                    if (valueDay == day.textContent) {
                        day.style.background = '#D0FAFB'
                        day.classList.add('note-info')
                        day.addEventListener('click', function () {
                            if (valueMonth == monthName) {
                                if (valueDay == day.textContent) {
                                    let nameNote = note.querySelector('.noteName');
                                    let descNote = note.querySelector('.noteDesc');
                                    let actionNote = note.querySelector('.noteEvent');
                                    areaName.textContent = nameNote.value
                                    areaEvent.textContent = actionNote.value
                                    areaDesc.textContent = descNote.value
                                    areaDate.textContent = dateNote.value
                                    pkForm.value = notePK.value
                                    taskornote.value = day.getAttribute('class').split(' ')[1]
                                }
                            }

                        })
                        if (day.style.boxShadow == 'rgb(0, 0, 0) 0px 0px 5px 1px') {
                            if (valueMonth == monthName) {
                                if (valueDay == day.textContent) {
                                    let nameNote = note.querySelector('.noteName');
                                    let descNote = note.querySelector('.noteDesc');
                                    let actionNote = note.querySelector('.noteEvent');
                                    areaName.textContent = nameNote.value
                                    areaEvent.textContent = actionNote.value
                                    areaDesc.textContent = descNote.value
                                    areaDate.textContent = dateNote.value
                                    pkForm.value = notePK.value
                                    taskornote.value = day.getAttribute('class').split(' ')[1]
                                }
                            }
                        }
                    }
                }
            }
        })
        tasks.forEach(function (task, index, tasks) {
            let dateTask = task.querySelector('.taskDate')
            let completeTask = task.querySelector('.taskComplete')
            let valueDay = dateTask.value.split(' ')[0]
            let valueMonth = dateTask.value.split(' ')[1]
            let valueYear = dateTask.value.split(' ')[2]
            let taskPK = task.querySelector('.taskPk')
            if (valueYear == today.split(' ')[2]) {
                if (valueMonth == monthName) {
                    if (valueDay == day.textContent) {
                        if (completeTask.value == 'False') {
                            day.classList.add('task-info')
                            day.style.background = '#D0FAFB'
                            day.addEventListener('click', function () {
                                if (valueMonth == monthName) {
                                    if (valueDay == day.textContent) {
                                        let nameTask = task.querySelector('.taskName');
                                        let descTask = task.querySelector('.taskDesc');
                                        let actionTask = task.querySelector('.taskEvent');
                                        areaName.textContent = nameTask.value
                                        areaEvent.textContent = actionTask.value
                                        areaDesc.textContent = descTask.value
                                        areaDate.textContent = dateTask.value
                                        pkForm.value = taskPK.value
                                        taskornote.value = day.getAttribute('class').split(' ')[1]
                                    }
                                }
                            })
                            if (day.style.boxShadow == 'rgb(0, 0, 0) 0px 0px 5px 1px') {
                                if (valueMonth == monthName) {
                                    if (valueDay == day.textContent) {
                                        let nameTask = task.querySelector('.taskName');
                                        let descTask = task.querySelector('.taskDesc');
                                        let actionTask = task.querySelector('.taskEvent');
                                        areaName.textContent = nameTask.value
                                        areaEvent.textContent = actionTask.value
                                        areaDesc.textContent = descTask.value
                                        areaDate.textContent = dateTask.value
                                        pkForm.value = taskPK.value
                                        taskornote.value = day.getAttribute('class').split(' ')[1]
                                    }
                                }
                            }
                        }
                    }
                }
            }



        })

        actions.forEach(function (action, index, actions) {
            let dateAction = action.querySelector('.actionDate')
            let valueDay = dateAction.value.split(' ')[0]
            let valueYear = dateAction.value.split(' ')[2]
            let valueMonth = dateAction.value.split(' ')[1]
            let actionPK = action.querySelector('.actionPk')
            if (valueYear == today.split(' ')[2]) {
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
                        day.addEventListener('click', function () {
                            if (valueMonth == monthName) {
                                if (valueDay == day.textContent) {
                                    let nameAction = action.querySelector('.actionName');
                                    let descAction = action.querySelector('.actionDesc');
                                    let actionAction = action.querySelector('.actionEvent');
                                    areaName.textContent = nameAction.value
                                    areaEvent.textContent = actionAction.value
                                    areaDesc.textContent = descAction.value
                                    areaDate.textContent = dateAction.value
                                    pkForm.value = actionPK.value
                                }
                            }


                        })
                        if (day.style.boxShadow == 'rgb(0, 0, 0) 0px 0px 5px 1px') {
                            if (valueMonth == monthName) {
                                if (valueDay == day.textContent) {
                                    let nameAction = action.querySelector('.actionName');
                                    let descAction = action.querySelector('.actionDesc');
                                    let actionAction = action.querySelector('.actionEvent');
                                    areaName.textContent = nameAction.value
                                    areaEvent.textContent = actionAction.value
                                    areaDesc.textContent = descAction.value
                                    areaDate.textContent = dateAction.value
                                    pkForm.value = actionPK.value
                                }
                            }

                        }
                    }
                }
            }


        })
        day.addEventListener('click', function () {
            calButtons.forEach(function (calButton, index, calButtons) {
                if (day.style.background == 'rgb(0, 255, 179)' || day.style.background == "rgb(255, 222, 102)") {
                    areaDate.style.height = '7%'
                    areaEvent.style.height = '7%'
                    calButton.style.display = 'none'

                } else if (day.style.background == 'rgb(208, 250, 251)') {
                    if (day.classList.contains('task-info')) {
                        areaDate.style.height = '25%'
                        areaEvent.style.height = '25%'
                        calButton.style.display = 'flex'
                    } else if (day.classList.contains('note-info')) {
                        calButton.style.display = 'flex'
                        if (index === 0) {
                            areaDate.style.height = '7%'
                            areaEvent.style.height = '7%'
                            calButton.style.display = 'none'
                        }
                    }
                }
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
        if ($(".calendar-content").attr('id') == month.id) {
            months.forEach(function (month, index, months) {
                month.style.color = 'black'
            })
            month.style.color = '#555555'

        }
        // SearchActionsDay()
        days.forEach(function (day, index, days) {
            if (day.classList.contains('note-info')) {
                day.classList.remove('note-info')
            } else if (day.classList.contains('task-info')) {
                day.classList.remove('task-info')
            }
            day.style.background = ''

            if ($(".calendar-content").attr('id') == today.split(' ')[1]) {
                if (day.textContent == today.split(' ')[0]) {
                    day.style.boxShadow = '0px 0px 5px 1px #000000'
                } else {
                    day.style.boxShadow = ''
                }
            } else {
                day.style.boxShadow = ''
            }

        })
        SearchActionsDay()
    })
})
window.localStorage.setItem('Day', today.split(' ')[0])
window.addEventListener('storage', function (event) {
    if (event.oldValue != event.newValue) {
        window.localStorage.setItem('NLimit', 0)
    }

})

if (areaName.textContent == '') {
    areaName.textContent = 'Сьогодні ніякої події немає'
    areaDate.style.height = '7%'
    areaEvent.style.height = '7%'
    calButtons.forEach(function (calButton, index, calButtons) {
        calButton.style.display = 'none'
    })

}
SearchActionsDay()
$(document).ready(function () {

    // document.addEventListener('visibilitychange', function () {
    // if (document.visibilityState === 'hidden') {
    let CheckForm = localStorage.getItem('PushN')
    if (CheckForm == 'true') {
        days.forEach(function (day, index, days) {
            if (day.style.boxShadow == 'rgb(0, 0, 0) 0px 0px 5px 1px') {
                if (day.style.background == 'rgb(255, 222, 102)') {
                    new Notification('Сьогодні відзначається офіційна подія!', {
                        body: `Сьогодні ${today.split(' ')[0]}.${today.split(' ')[1]} відзначається подія: ${areaName.textContent}`,
                        icon: 'https://colourlex.com/wp-content/uploads/2021/02/naples-yellow-painted-swatch.jpg'
                    })
                }
                else if (day.style.background == 'rgb(0, 255, 179)') {
                    new Notification('Сьогодні відзначається подія від Kalendaru!', {
                        body: `Сьогодні ${today.split(' ')[0]}.${today.split(' ')[1]} відзначається подія: ${areaName.textContent}`,
                        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEVJxJZuy6+uAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'
                    })
                }
                else if (day.style.background == 'rgb(208, 250, 251)') {
                    new Notification('Сьогодні відзначається ваша подія!', {
                        body: `Сьогодні ${today.split(' ')[0]}.${today.split(' ')[1]} відзначається подія: ${areaName.textContent}`,
                        icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUXFRUXFRUVFxUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0fHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EACUQAQEBAAAFAwQDAAAAAAAAAAABEQIhMWHwQYHBElFxoQOx0f/EABYBAQEBAAAAAAAAAAAAAAAAAAABA//EABgRAQADAQAAAAAAAAAAAAAAAAABEUEx/9oADAMBAAIRAxEAPwDsKDVrdgiKYIRFxBRamKCLpgBAlQFhiLQJ+TkhAVfdkBbUWAFRaYAGGAikhaCUXfMhohoaAkFiABgCoqAvCQSCrhiGCBV0oIC4CYpE0UGtNCkww6mAU0SAtiYqQFClAxMWFBBcBAKYKQMAKSB5/YGmosggUMFDT6UBbUgCFFiAtRQFSrPhlFIqNVRIIsBCRZAQRTBUFzuBS6zi0qAGiiKYYCRaiwADQC07oCkvnIqAUWoItgVBVphpQCxAQWACNSsgLpA0UwPqoIVIpgqCmAiiCAugBIRaKmoLBCopgFIIKGiiGEKSipRUEU0QVaakLAXSos8/YiAoILQFrIAtRaCiKQEWIoiLBABaAaYmgq0gUEUqCAAKilFDUhYAoQEF5AgYRBVwwJAKIQFqyJUBcWxKiCiKoaIsAsQi6ISosJBSGougtqUJUEFLFQKAotiRNBcDQQhCFFQUoLahUBbFiUiCGrw0UAqAKIIsRYuisxq9E0xBBUVF1KLopIQQAi1BFiLSwVBeX3BCIsKKQKcILcTA9UCkIKAVYgzRcNVDRFRTDEFRcKkiimgARFQFvojXFE1ANQVF01AUAEX8ERdFRTARCVcTQWoKKAYBpiLKBaRFBFw0lA0RbQMDSAUReEFvEnJAotc7mGGgYFSAud4G9gEXDUBdKYaBpiNSgysXUwCGrb555zSxApoKGmotBFhADUXEoKGAILpohQMFKi2mginsAYJ50AWoAixFqAovZBUi1FoJFqKCLhC0CIuAELEIBF1LFA4jDiQFwwqaDWsrEA1UUQRUAABbSIQVTQAKjVBIUhoIsAC4SoAsRYYCSKRAURbQNEKCxKKBAqAoABUBAX6aBQaGChSJAFpDBAhhRUFqCLoYCmoAi0qLRRBRAwxBVKi0RIthhRUVNWgYYQtA5fYTVEX+TrWfTzuBi61fj4ZAglfP0gED09GPXz7KJCsrwqKjK8PWfkA1f5OrIEE9FvwAHp7nD1AEAEFoAvEzFBUIoBxf4cIBrAAj/9k='
                    })
                }
                window.localStorage.setItem('NLimit', 1)

            }

        })
    }
    // }
    // })

})