document.getElementById('button_valider').onclick = showAlert;

function showAlert(){
var pointure = document.getElementById("pointure").value;
var naissance = document.getElementById("naissance").value;
var result = (pointure*2);
var result2 = (result+5);
var result3 = (result2*50);
var result4 = (result3-naissance);
var result5 = (result4+1769);

alert('Résultat : ' + result5)
}