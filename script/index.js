
function getElement(id){
    const element=document.getElementById(id);
    return element;
}

//heart
const heartBtn=document.querySelectorAll('.heart-btn')
const heartCnt=document.getElementById('heart-cnt');
let totalHeart=0;

for(const btn of heartBtn){
    btn.addEventListener('click',function(){
        totalHeart++
        heartCnt.innerText=totalHeart;
    }) 
}

//call btn

 