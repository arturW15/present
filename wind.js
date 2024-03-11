document.getElementById('modul1').addEventListener("click", myFunction1);
document.getElementById('close1').addEventListener("click", myFunction11);
function myFunction1() {
    document.getElementById('wind1').style.display = "block";
    document.getElementById('wind2').style.display = "none";
}
function myFunction11() {
    document.getElementById('wind1').style.display = "none";
}

document.getElementById('modul2').addEventListener("click", myFunction2);
document.getElementById('close2').addEventListener("click", myFunction22);
function myFunction2() {
    document.getElementById('wind2').style.display = "block";
    document.getElementById('wind1').style.display = "none";
}
function myFunction22() {
    document.getElementById('wind2').style.display = "none";
}


document.getElementById('success').addEventListener("click", myFunction3);
function myFunction3() {
    document.getElementById('pay').style.display = "block";
}

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "COME BACK";
}) 
window.addEventListener("focus", () => {
    document.title = docTitle;
}) 