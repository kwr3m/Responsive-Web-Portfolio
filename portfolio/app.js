const down = document.getElementById('arrow')
const container = document.querySelector('.slide')
const body = document.querySelector('body')

down.addEventListener('click', () => {
    container.scrollTop += container.offsetHeight
    if(container.scrollTop + container.offsetHeight > container.scrollHeight)
    {
        container.scrollTop = 0
    }
})

const imgs = document.querySelectorAll('span')
const right = document.querySelector('#right')
const left = document.querySelector('#left')
const slider = document.querySelector('.slider')
let imgNum = imgs.length



right.addEventListener('click',() => {
    let currentNum = 0
    for(i=0; i<imgNum; i++){
        if(imgs[i].classList=='visible')
        currentNum = i
    }
    if(currentNum < imgNum - 1){
        imgs[currentNum].classList.remove('visible')
        imgs[currentNum].classList.add('hidden')
        imgs[currentNum+1].classList.remove('hidden')
        imgs[currentNum+1].classList.add('visible')
    }else{
        imgs[currentNum].classList.remove('visible')
        imgs[currentNum].classList.add('hidden')
        imgs[0].classList.remove('hidden')
        imgs[0].classList.add('visible')
    }
    
})

left.addEventListener('click',() => {
    let currentNum = 0
    for(i=0; i<imgNum; i++){
        if(imgs[i].classList=='visible')
        currentNum = i
    }
    if(currentNum > 0){
        imgs[currentNum].classList.remove('visible')
        imgs[currentNum].classList.add('hidden')
        imgs[currentNum-1].classList.remove('hidden')
        imgs[currentNum-1].classList.add('visible')
    }else{
        imgs[0].classList.remove('visible')
        imgs[0].classList.add('hidden')
        imgs[imgNum-1].classList.remove('hidden')
        imgs[imgNum-1].classList.add('visible')
    }
    
})
