function tambah(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('nilai')[0].value += "+";
}
function kurang(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('nilai')[0].value += "-";
}
function kali(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('nilai')[0].value += "*";
}
function bagi(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('nilai')[0].value += "/";
}
function hitung(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('hasil')[0].value = eval(val);
}
function clear() {
	val = document.getElementsByName('nilai')[0].value;
	document.getElementById("output").value = "0";;
}