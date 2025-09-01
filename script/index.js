
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

const callBtn=document.querySelectorAll('.call')
const coinCnt=document.getElementById('coin-cnt')
let coins=parseInt(coinCnt.innerText)

const callHistorty=document.querySelector('.history')


for(const btn of callBtn){
    btn.addEventListener('click',function(){
        const card=this.closest('.card-body')
        const serviceName=card.querySelector('.card-title').innerText
        const serviceNumber=card.querySelector('.num').innerText

        if(coins<20){
            alert('❌Sorry!! You dont have enough coins.You need atleast 20 coins to make a call...')
            return
        }
        coins-=20
        coinCnt.innerText=coins

        alert(`📞Calling ${serviceName} at ${serviceNumber}`)

        const time=new Date().toLocaleTimeString();
        const hstry=document.createElement('div')
        hstry.classList.add('p-3','rounded-lg','bg-gray-100','mt-2')
        hstry.innerHTML=`
            <h3 class='font-bold'>${serviceName}</h3>
            <p>${serviceNumber}</p>
            <p class='text-sm text-black'>${time}</p>
        `
        callHistorty.appendChild(hstry);

    })
}

//clear
const clearBtn=document.querySelector('.history')

clearBtn.addEventListener('click',function(){
    const first=Array.from(callHistorty.children).slice(1)

    for(const f of first){
        f.remove()
    }
})

//copy-btn





