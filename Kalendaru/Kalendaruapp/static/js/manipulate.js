let datenew = new Date();
let fullyear = datenew.getFullYear();
let fullmonth = datenew.getMonth();

const day = document.querySelector(".calendar-dates");

const manipulate = (date, year, month) => {
    let dayone = new Date(year, month, 1).getDay();
    let lastdate = new Date(year, month + 1, 0).getDate();
    let dayend = new Date(year, month, lastdate).getDay();
    let monthlastdate = new Date(year, month, 0).getDate();

    let lit = "";

    for (let i = dayone; i > 0; i--) {
        lit += `<li class="no-active-day daycheck">${monthlastdate - i + 1}</li>`;
    }

    for (let i = 1; i <= lastdate; i++) {
        let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
        lit += `<li class="${isToday} day daycheck">${i}</li>`;
    }

    for (let i = dayend; i < 6; i++) {
        lit += `<li class="no-active-day daycheck">${i - dayend + 1}</li>`
    }

    day.innerHTML = lit;
}


manipulate(date = datenew, year = fullyear, month = fullmonth);