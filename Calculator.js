let lightModeEl = document.getElementById('lightMode');
let darkModeEl = document.getElementById('darkMode');
let mainContainerEl = document.getElementById('mainContainer');
let outputEl = document.getElementById('output');

/*All the values of button */
function Solve(val) {
    var inp1 = document.getElementById('Inputvalue');
    inp1.value += val;
}

/*Clearing Input into the empty */
function ClearAll() {
    var inp2 = document.getElementById('Inputvalue');
    inp2.value = "";
}

/*Deeleting last character of the output and input */
function Delete() {

    var delet = document.getElementById("Inputvalue");
    delet.value = delet.value.slice(0, -1);

}

/*By clicking on " = " the output displays on input */
outputEl.onclick = function() {

    var calculator1 = document.getElementById("Inputvalue").value;
    var calculator2 = eval(calculator1);
    document.getElementById("Inputvalue").value = calculator2;

}

/*Dark Mode of the calculator */
darkModeEl.onclick = function() {

    mainContainerEl.style.backgroundColor = "#000";
    lightModeEl.style.display = 'block';
    darkModeEl.style.display = 'none';
    var input = document.getElementById('Inputvalue');

}

/* lightMode of the calculator  */
lightModeEl.onclick =
    function() {

        mainContainerEl.style.backgroundColor = 'white';
        lightModeEl.style.display = 'none';
        darkModeEl.style.display = 'block';
    }