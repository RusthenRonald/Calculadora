var resultado= document.querySelector('.res')
tot=''
function add(number){
    tot+=number
    resultado.innerHTML=tot
}
function cleardisplay(){
    tot=''
    resultado.innerHTML=''
}