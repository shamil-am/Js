function change() {
    document.getElementById('change').innerHTML='JS can change HTML intro';
}
function light_on() {
    document.getElementById('bulb_off').src="pic_bulbon.gif";
}
function light_off() {
    document.getElementById('bulb_off').src="pic_bulboff.gif";
}
function change_color() {
    document.getElementById('h1change').style.color="red";
}
function change_size() {
    document.getElementById('h1change').style.fontSize="20px";
}
function secret() {
    document.getElementById('h1change').style.display="none";
}
function timechange() {
    document.getElementById('timechange').innerHTML='date()';
    document.getElementById('demo').innerHTML = Date();
}