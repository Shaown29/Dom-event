function makeRed(){
    document.body.style.backgroundColor="red";
}
const blueButton= document.getElementById('make-blue-button');
blueButton.onclick=makeBlue;

function  makeBlue(){
    document.body.style.backgroundColor="blue";
}
const getbutton=document.getElementById('make-green-button');
getbutton.onclick=function(){
    document.body.style.backgroundColor="green";
}
const gana=document.getElementById('make-goldenRod');
gana.addEventListener('click',moja );
function moja(){
  document.body.style.backgroundColor="goldenRod";
}
const teri=document.getElementById('make-hotPink');
teri.addEventListener('click',function(){
    document.body.style.backgroundColor="hotpink";
})