/* document.addEventListner("DOMcontentLoaded",domReady());
function domReady(){
 */

class current_color {
    constructor(color, code) {
      this.color = color,
      this.code = code;
    }
    getColor() {
      return this.color;
    }
    getCode(){
        return this.code;
    }
  }
var item;
var todoItem;
let current_who = new current_color('purple','#F1EDFF')
document.addEventListener("DOMContentLoaded", function (e) {
/*     current_color.color='purple';
     current_color.code='#F1EDFF'; */
    var noteItems = document.getElementsByClassName("dd");
    for (let i = 0; i < noteItems.length; i++) {
        var item = noteItems[i];
        noteItems[i].addEventListener("keydown", function () {
            limit(noteItems[i]);
        });

    }

    var toDoItems = document.getElementsByClassName("li_content");
    for (let i = 0; i < toDoItems.length; i++) {
        var todoItem = toDoItems[i];
        toDoItems[i].addEventListener("keyup", function () {
            chk(toDoItems[i]);
        });
    }

});

function chk(e) {
    if (event.keyCode === 13 || event.code == 'enter') {
        var li = document.createElement("li");
        var input = document.createElement("input");
        input.className = "li_content";
        input.type = "search";
        input.addEventListener("keyup", function () {
            chk(input);
        })
        input.maxLength="24";
        li.appendChild(input);
        document.getElementById("to_do_ul").appendChild(li);
        console.log(document.getElementById("to_do_ul").lastChild);
        document.getElementById("to_do_ul").lastChild.firstChild.focus();
    }
    if (event.keyCode === 8) {
        console.log(e)
        if (e.value.length < 1) {
            console.log(String(e.parentNode.parentNode.lastChild))
            if(document.getElementById("to_do_ul").children.length>1){
            /* if (String(e.parentNode.parentNode.lastChild) != '[object Text]') { */
                e.parentNode.remove();
                if(document.getElementById("to_do_ul").children.length>1){
                document.getElementById("to_do_ul").lastChild.firstChild.focus();
                }
            }
            /* e.parentNode.style.display="none"; */
        }
    }
}
/* } */
function hideDate() {
    if (document.getElementById("current-planner").style.display != "none") {
        document.getElementById("current-planner").style.display = "none";
    } else {
        document.getElementById("current-planner").style.display = "grid";
    }
}

function limit(e) {
    if (e.value.length > 1) {
        e.parentNode.style.backgroundColor = current_who.getCode();
    } else {
        e.parentNode.style.backgroundColor = '#f8f8f8';
    }
    if (e.value.split('\n').length > 3) {
        this.blur();
        swal('허용되지 않은 입력', '3줄까지만 입력 가능합니다.', 'warning', {
            button: '돌아가기',
        });
        e.value = e.value.split('\n').slice(0, 3).join('\n');
    }
    return 0;
}

function changeBackColor(a, b){
    if(b=='pastel'){
        current_who.color='pastel';
        current_who.code='#fff0e8';
document.getElementById("planner_date").style.backgroundColor="#fff0e8";
document.getElementById("to_do_list").style.backgroundColor="#ffd7c2";
document.getElementById("for_tomorrow").style.backgroundColor="#fff0e8";
    }else if(b=='purple'){
        current_who.color='purple';
        current_who.code='#F1EDFF';
        document.getElementById("planner_date").style.backgroundColor="#F1EDFF";
        document.getElementById("to_do_list").style.backgroundColor="#c4b4ff";
        document.getElementById("for_tomorrow").style.backgroundColor="#F1EDFF";
    }else if(b=='blue'){
        current_who.color='blue';
        current_who.code='#dee5fe';
        document.getElementById("planner_date").style.backgroundColor="#dee5fe";
        document.getElementById("to_do_list").style.backgroundColor="#c3d1ff";
        document.getElementById("for_tomorrow").style.backgroundColor="#dee5fe";
    }else{
        current_who.color='green';
        current_who.code='#C5FFE8';
        document.getElementById("planner_date").style.backgroundColor="#C5FFE8";
        document.getElementById("to_do_list").style.backgroundColor="#62EEB6";
        document.getElementById("for_tomorrow").style.backgroundColor="#C5FFE8";
    }
}