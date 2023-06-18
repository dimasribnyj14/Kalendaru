
// let logoLoading = document.querySelector('.logoLoading')
// let loading = document.querySelector('.loading')
// function loadingdoc(event) {
//     logoLoading.style.display = "block";
//     setTimeout(
//         () => logoLoading.style.opacity = 1,
//         1
//     )
//     let windowWidth = document.body.clientWidth;
//     let windowHeight = document.body.clientHeight;
//     let WindowWidth = logoLoading.clientWidth;
//     let WindowHeight = logoLoading.clientHeight;
//     let left = windowWidth / 2 - WindowWidth / 2;
//     let top = windowHeight / 2 - WindowHeight / 2;
//     logoLoading.style.top = top + "px";
//     logoLoading.style.left = left + "px";
// }
// loadingdoc()
const languageCheck = navigator.language || navigator.userLanguage;
if (languageCheck == 'ru-RU') {
    console.log(languageCheck)
}
else if (languageCheck == 'uk-UK') {
    console.log(languageCheck)
}
else if (languageCheck == 'uk') {
    console.log(languageCheck)
}
else {
    console.log("error")
    window.location.href = "{% url 'error' %}"
    $("#errorSite").text('Виникла помилка! Будь ласка змініть на СНГ мову щоб працював Kalendaru.')
}
if (window.matchMedia("(max-width: 700px)").matches == false) {
    document.querySelector('.side-main').addEventListener('mouseenter', function () {
        document.querySelector('.side-main').classList.add('hover')
        document.querySelectorAll('.icons').forEach(function (iconButton, index, iconButtons) {
            iconButton.classList.add('hovericons')
        })

        document.querySelectorAll('.text-buttons').forEach(function (textButton, index, textButtons) {
            textButton.classList.add('hovertext')
        })

    })
    document.querySelector('.side-main').addEventListener('mouseleave', function () {
        document.querySelector('.side-main').classList.remove('hover')
        document.querySelectorAll('.icons').forEach(function (iconButton, index, iconButtons) {
            iconButton.classList.remove('hovericons')
        })

        document.querySelectorAll('.text-buttons').forEach(function (textButton, index, textButtons) {
            textButton.classList.remove('hovertext')
        })
    })
    window.addEventListener('beforeunload', () => {
        if (document.querySelector('.side-main:hover')) {
            window.localStorage.setItem('hover', 'true')
        } else {
            window.localStorage.removeItem('hover')
        }
    })

    // window.addEventListener('load', function () {
    // loading.style.opacity = 0;
    if (window.localStorage.getItem('hover')) {
        document.querySelector('.side-main').style.transitionDuration = "0s"
        document.querySelectorAll('.icons').forEach(function (iconButton, index, iconButtons) {
            iconButton.style.transitionDuration = "0s"
        })
        document.querySelectorAll('.text-buttons').forEach(function (textButton, index, textButtons) {
            textButton.style.transitionDuration = "0s"
        })
        document.querySelector('.side-main').classList.add('hover')
        document.querySelectorAll('.icons').forEach(function (iconButton, index, iconButtons) {
            iconButton.classList.add('hovericons')
        })
        document.querySelectorAll('.text-buttons').forEach(function (textButton, index, textButtons) {
            textButton.classList.add('hovertext')
        })
        setTimeout(function () {
            // loading.style.display = 'none';
            document.querySelector('.side-main').style.transitionDuration = "400ms"
            document.querySelectorAll('.icons').forEach(function (iconButton, index, iconButtons) {
                iconButton.style.transitionDuration = "400ms"
            })
            document.querySelectorAll('.text-buttons').forEach(function (textButton, index, textButtons) {
                textButton.style.transitionDuration = ""
            })
        }, 1)
    }
    // })
}

