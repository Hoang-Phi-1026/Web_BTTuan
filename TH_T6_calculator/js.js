function Cong() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var ketqua = a + b;
    document.getElementById("ketqua").value = ketqua;
}
  
function Tru() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var ketqua = a - b;
    document.getElementById("ketqua").value = ketqua;
}
  
function Nhan() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var ketqua = a * b;
    document.getElementById("ketqua").value = ketqua;
}
  
function Chia() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var ketqua = a / b;
    document.getElementById("ketqua").value = ketqua;
}
function CanBacHai() {
    var a = parseFloat(document.getElementById("a").value);
    var ketqua = Math.sqrt(a);
    document.getElementById("ketqua").value = ketqua;
}
function Reset() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("ketqua").value = "";
}

var openButton = document.querySelector('.open');
var form = document.querySelector('.form');
var closeButton = document.querySelector('.bxs-x-circle')

openButton.addEventListener('click', function() {
	form.style.display = 'block';
	openButton.style.display = 'none';
});

closeButton.addEventListener('click', function() {
	form.style.display = 'none';
    openButton.style.display = 'block';
});
