function Cong() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var result = input1 + input2;
    document.getElementById("result").value = result;
}
  
function Tru() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var result = input1 - input2;
    document.getElementById("result").value = result;
}
  
function Nhan() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var result = input1 * input2;
    document.getElementById("result").value = result;
}
  
function Chia() {
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var result = input1 / input2;
    document.getElementById("result").value = result;
}
function CanBacHai() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var result = Math.sqrt(input1);
    document.getElementById("result").value = result;
}
function Reset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").value = "";
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
