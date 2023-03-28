const btn=document.getElementById("btn")
const wrap=document.getElementById("wrap")
const colortext=document.getElementById("color") 
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',changeBg)

function changeBg(){
    let hexcolor='#'
    for(let i=1;i<=6;i++){
       hexcolor=hexcolor+ randval()
    }
    wrap.style.backgroundColor=hexcolor
    colortext.innerHTML=hexcolor 
}

 

function randval(){
    let rand=Math.floor(Math.random()*16)
    return hex[rand]
}