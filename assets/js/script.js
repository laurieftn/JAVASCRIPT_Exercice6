document.getElementById('button_valider').onclick = showAlert;

function showAlert(){
var pointure = document.getElementById("pointure").value;
var naissance = document.getElementById("naissance").value;
var result = (((((pointure*2)+5)*50)-naissance)+1769);

alert('Résultat : ' + result)
}