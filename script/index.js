
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
        const card=btn.parentElement.parentElement.parentElement
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
        hstry.classList.add('p-3','rounded-lg','bg-gray-100','mt-2','items-center')
        hstry.innerHTML=`
            <h3 class='font-bold'>${serviceName}</h3>
            <p>${serviceNumber}</p>
            <p class='text-sm text-black font-bold'>${time}</p>
        `
        callHistorty.appendChild(hstry);

    })
}

//clear
const clearBtn=document.getElementById('clr')

clearBtn.addEventListener('click',function(){
    const first=Array.from(callHistorty.children).slice(1)

    for(const f of first){
        f.remove()
    }
})

//copy-btn
const copyBtn=document.querySelectorAll('.copy')
const copyCntE=document.getElementById('copy-cnt')
let copyCnt=0

for(const btn of copyBtn){
    btn.addEventListener('click',async function(){
        const c=btn.parentElement.parentElement.parentElement
        const numE=c.querySelector('.num')
        if(!numE){
            return
        }
        const hotLine=numE.innerText.trim();

        try{
            if(navigator.clipboard && navigator.clipboard.writeText){
                await navigator.clipboard.writeText(hotLine)
            }
            else{
                const text=document.createElement('textarea')
                text.value=hotLine
                text.style.position='fixed'
                text.style.left='-9999px'
                document.body.appendChild(text)
                text.select()
                document.execCommand('copy')
                document.body.removeChild(text)
            }
            copyCnt++
            copyCntE.innerText=copyCnt

            alert(`copied the number:${hotLine}`)

        }
        catch(err){
            alert('Failed to copy')
            console.error('copy error',err)
        }

    })
}




