var resultado= document.querySelector('.res')
tot=''
function add(number){
    tot+=number
    resultado.innerHTML=tot
}
function clear(){
    tot=''
    resultado.innerHTML=''
}