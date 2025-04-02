
class current_date {
  constructor(yy, mm, dd, DD) {
    this.year = yy,
      this.month = mm,
      this.date = dd,
      this.day = DD,
      this.currentM = mm,
      this.currentY = yy
  }
  getYear() {
    return this.year;
  }
  getMonth() {
    return this.month;
  }
  getDate() {
    return this.date;
  }
  getDay() {
    return this.day;
  }
}
var calendarContent;
var chk;
var current;
document.addEventListener('DOMContentLoaded', function () {
  current = new Date();

  writeCalendar();

});

function prevMonth() {
  current_date.month = Number(current_date.month) - 1;
  calendarContent = '<span class="day">일</span><span class="day">월</span><span class="day">화</span><span class="day">수</span><span class="day">목</span><span class="day">금</span><span class="day">토</span>';
  if (current_date.month == 0) {
    current_date.year -= 1;
    current_date.month = 12;
  }
  for (var i = Number(0); i < new Date(current_date.year, current_date.month, 1).getDay(); i++) {
    calendarContent += '<button class="date faded"></button>';
  }
  for (var i = Number(1); i < 32; i++) {
    if (new Date(current_date.year, current_date.month - 1, i).getMonth() + 1 > current_date.month) {
      break;
    }
    if (current_date.month == current_date.currentM && current_date.year == current_date.currentY) {
      if (i == current_date.date) {
        calendarContent += '<button class="date current-day">' + i + '</button>';
      } else {
        calendarContent += '<button class="date">' + i + '</button>';
      }
    } else {
      calendarContent += '<button class="date">' + i + '</button>';
    }
  }
  /*   chk = document.querySelector('.current-day')
    if (!!chk) {
      document.querySelector('.current-day').className = 'date'
    } */
  document.getElementById('datepicker-calendar').innerHTML = calendarContent;
  document.getElementById('month-name').innerText = current_date.year + '년 ' + current_date.month + '월';
  document.getElementById("month").value = current_date.month;
}
function prefMonth() {
  current_date.month = Number(current_date.month) + 1;
  calendarContent = '<span class="day">일</span><span class="day">월</span><span class="day">화</span><span class="day">수</span><span class="day">목</span><span class="day">금</span><span class="day">토</span>';
  if (current_date.month == 13) {
    current_date.year += 1;
    current_date.month = 1;
  }
  for (var i = Number(0); i < new Date(current_date.year, current_date.month - 1, 1).getDay(); i++) {
    calendarContent += '<button class="date faded"></button>';
  }
  for (var i = Number(1); i < 32; i++) {
    if (new Date(current_date.year, current_date.month - 1, i).getMonth() + 1 > current_date.month) {

      break;
    }
    if (current_date.month == current_date.currentM && current_date.year == current_date.currentY) {
      if (i == current_date.date) {
        calendarContent += '<button class="date current-day">' + i + '</button>';
      } else {
        calendarContent += '<button class="date">' + i + '</button>';
      }
    } else {
      calendarContent += '<button class="date">' + i + '</button>';
    }
  }
  /*   chk = document.querySelector('.current-day')
    if (!!chk) {
      document.querySelector('.current-day').className = 'date'
    } */
  document.getElementById('datepicker-calendar').innerHTML = calendarContent;
  document.getElementById('month-name').innerText = current_date.year + '년 ' + current_date.month + '월';
  document.getElementById("month").value = current_date.month;
}

function writeCalendar(year, month) {
  current_date.year = current.getFullYear();
  current_date.month = Number(current.getMonth()) + 1;
  current_date.date = current.getDate();
  current_date.day = current.getDay();
  current_date.currentM = current_date.month;
  current_date.currentY = current_date.year;
  calendarContent = '<span class="day">일</span><span class="day">월</span><span class="day">화</span><span class="day">수</span><span class="day">목</span><span class="day">금</span><span class="day">토</span>';
  for (var i = Number(0); i < new Date(current_date.year, current_date.month - 1, 1).getDay(); i++) {
    calendarContent += '<button class="date faded"></button>';
  }
  for (var i = Number(1); i < 32; i++) {
    if (i == current_date.date) {
      calendarContent += '<button class="date current-day">' + i + '</button>';
    } else {
      calendarContent += '<button class="date">' + i + '</button>';
    }
  }
  document.getElementById('datepicker-calendar').innerHTML = calendarContent
  document.getElementById('month-name').innerText = current_date.year + '년 ' + current_date.month + '월';
  document.getElementById("month").value = current_date.month;
}

function rewriteCalendar() {
  if (current_date.month != document.getElementById("month").value) {
    current_date.month = document.getElementById("month").value;
    calendarContent = '<span class="day">일</span><span class="day">월</span><span class="day">화</span><span class="day">수</span><span class="day">목</span><span class="day">금</span><span class="day">토</span>';
    if (current_date.month == 13) {
      current_date.year += 1;
      current_date.month = 1;
    }
    for (var i = Number(0); i < new Date(current_date.year, current_date.month - 1, 1).getDay(); i++) {
      calendarContent += '<button class="date faded"></button>';
    }
    for (var i = Number(1); i < 32; i++) {
      if (new Date(current_date.year, current_date.month - 1, i).getMonth() + 1 > current_date.month) {

        break;
      }
      if (current_date.month == current_date.currentM && current_date.year == current_date.currentY) {
        if (i == current_date.date) {
          calendarContent += '<button class="date current-day">' + i + '</button>';
        } else {
          calendarContent += '<button class="date">' + i + '</button>';
        }
      } else {
        calendarContent += '<button class="date">' + i + '</button>';
      }
    }
    document.getElementById('datepicker-calendar').innerHTML = calendarContent
    document.getElementById('month-name').innerText = current_date.year + '년 ' + current_date.month + '월';
  }
}

function changeBackColor(a, b) {
  if (b == 'purple') {
    elements = document.getElementsByClassName('toDoTitle');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#F1EDFF";
    }
    elements = document.getElementsByClassName('toDoContent');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#F1EDFF";
    }
    elements = document.getElementsByClassName('toDoToday');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#B9A6FF";
    }
  } else if (b == 'blue') {
    elements = document.getElementsByClassName('toDoTitle');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#dee5fe";
    }
    elements = document.getElementsByClassName('toDoContent');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#dee5fe";
    }
    elements = document.getElementsByClassName('toDoToday');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#c3d1ff";
    }
  } else if (b=='pastel'){
    elements = document.getElementsByClassName('toDoTitle');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#fff0e8";
    }
    elements = document.getElementsByClassName('toDoContent');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#fff0e8";
    }
    elements = document.getElementsByClassName('toDoToday');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#ffd7c2";
    }
  }else{
    elements = document.getElementsByClassName('toDoTitle');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#C5FFE8";
    }
    elements = document.getElementsByClassName('toDoContent');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#C5FFE8";
    }
    elements = document.getElementsByClassName('toDoToday');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#62EEB6";
    }   
  }
}