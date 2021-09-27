
window.onload = function(){
 typeWriter();

};
var i = 0;
var txt = 'Computer Engineer || Android Developer || Web Developer';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
